import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private sessionService: SessionService) {}

  isLoggednIn() {
    return this.sessionService.getLoginName() !== null;
  }
}
