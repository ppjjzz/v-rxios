import { BehaviorSubject } from 'rxjs';

export class EventBusService {
    public editSubject = new BehaviorSubject(null);
}
