import { Component, Vue } from 'vue-property-decorator';
import { BehaviorSubject } from 'rxjs';

@Component({
    inject: ['eventBusService'], // 子组件依赖注入父组件或上级组件提供的服务单例
})
export default class EditModal extends Vue {
    public name = '';
    public address = '';
    constructor() {
        super();
    }
    public created() {
        // 订阅服务中事件总线的流
        (this.eventBusService.editSubject as BehaviorSubject<any>).subscribe((data) => {
            if (data !== null) {
                this.name = data.name;
                this.address = data.address;
            }
        });
    }
    public closeModal() {
        this.$emit('close');
    }
}
