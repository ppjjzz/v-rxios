import { Component, Vue, Watch } from 'vue-property-decorator';
import { List } from 'immutable';
import EditTable from './components/EditTable.vue';
import EditModal from './components/EditModal.vue';
import { Vrxios } from './util/v-rxios';
import { map, filter, switchMap, debounceTime, delay } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { EventBusService } from '@/service/event-bus.service';
import ApiService from './api/demo-api.service';

@Component({
    components: {
        EditTable,
        EditModal,
    },
    provide() {  // 顶层组件提供服务单例
        return {
            eventBusService: this.eventBusService,
        };
    },
})
export default class App extends Vue {
    @Watch('keyword')
    public onKeyWordChange(keyword: string) {
        this.data$.next({
            keyword,
            arr: List(this.arr).toJS(), // 将数组做不可变处理
        });
    }
    public eventBusService = new EventBusService();
    public showEdit = false;
    public keyword = '';
    public arr = [1];
    private apiService: Vrxios = ApiService;
    private data$ = new Subject();
    constructor() {
        super();
    }
    public created() {

        this.eventBusService.editSubject.subscribe((data) => {
            if (data !== null) {
                this.showEdit = true;
            }
        });
        this.data$
            .pipe(
                debounceTime(500), // 500毫秒的输入防抖
                map((req) => { // 对发送到流中的参数做处理
                    console.log(req.arr);
                    req.arr.push(333);
                    req.keyword += '$';
                    return req;
                }),
                switchMap((params) => // 只订阅最后一次的结果
                    this.apiService.get(`/google/bg/feed/getFilterConditions`, params),
                ),
                filter((res) => { // 过滤返回结果
                    console.log('filter', res, this.arr, 222); // 验证map中对数组的操作不会影响原对象
                    return res.code === '2000';
                }),
        )
            .subscribe((res) => { // 成功回调
                console.log(res);
            }, (err) => { // 错误回调
                console.log(err);
            });
    }
    public request() {
        this.data$.next({
            country: 'aaa',
        });
    }
}
