import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sessonPrefix } from '../constValues';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionKeyUpdated = new BehaviorSubject(null);
  currentSessionKey = this.sessionKeyUpdated.asObservable();

  public setAccessToken(token) {
    this.setSessionItem(sessionKey.accessToken, token);
  }

  public setSessionItem(key: sessionKey, value: any) {
    sessionStorage.setItem(sessonPrefix + key, value);
  }
  public getSessionItem(key: sessionKey): string {
    return sessionStorage.getItem(sessonPrefix + key);
  }
  public deleteSessionItem(key: sessionKey): void {
    sessionStorage.removeItem(sessonPrefix + key);
  }

  public clearSession(): void {
    sessionStorage.clear();
  }

  public getAccessToken(): string {
    const accessToken = this.getSessionItem(sessionKey.accessToken);
    if (!accessToken) {
      return null;
    }
    return accessToken;
  }

  public getLoginId(): string {
    const loggedId = this.getSessionItem(sessionKey.loginId);
    if (!loggedId) {
      return null;
    }
    return loggedId;
  }
  public getLoginName(): string {
    const loggedName = this.getSessionItem(sessionKey.name);
    if (!loggedName) {
      return null;
    } else {
      this.updateSessionKey(sessionKey.name);
    }
    return loggedName;
  }

  // tslint:disable-next-line:no-shadowed-variable
  updateSessionKey( sessionKey: sessionKey) {
    this.sessionKeyUpdated.next(sessionKey);
  }

}

export enum sessionKey {
  accessToken = 'token',
  loginId = 'id',
  role = 'role',
  name = 'name',
  domainName = 'domainName'
}
