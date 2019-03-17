import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {BaseApi} from '../core/base-api';
import {EventModel} from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.post('events/', event);
  }

  getEvents(): Observable<EventModel[]> {
    return this.get('events/');
  }

  getEventById(id: string): Observable<EventModel> {
    return this.get(`events/?id=${id}`);
  }

}
