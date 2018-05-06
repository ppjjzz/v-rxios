import { Component, Vue } from 'vue-property-decorator';

@Component({
    inject: ['eventBusService'],
})
export default class EditTable extends Vue {
    public tableData = [{
        date: '2016-05-03',
        name: '王小虎1',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄111',
        zip: 200333,
    }, {
        date: '2016-05-02',
        name: '王小虎2',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄222',
        zip: 200333,
    }, {
        date: '2016-05-04',
        name: '王小虎3',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄333',
        zip: 200333,
    }, {
        date: '2016-05-01',
        name: '王小虎4',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄444',
        zip: 200333,
    }];
    constructor() {
        super();
    }
    public created() {
        console.log(this.eventBusService);
    }
    public handleClick(row) {
        console.log(row);
    }
    public openEdit(name: string, address: string) {
        // 向事件服务中的流发送数据
        this.eventBusService.editSubject.next({
            name,
            address,
        });
    }
}
