import { Injectable } from '@angular/core';
import { HttpService } from '../utilities/http/http.service';
import { sessionKey, SessionService } from '../utilities/session/session.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  public urlForLogin: string;
  public urlForSecurityQuestion: string;
  public urlSecurityAnswerValidate: string;
  public urlFetchUsers: string;

  constructor(private httpService: HttpService, private sessionService: SessionService) { }

  getLogin(parameter) {
    this.urlForLogin = 'http://localhost:90/security-web/json/security/login';
    const requestParameter = 'j_username=' + parameter.name + '&j_password=' + parameter.pwd + '&org=' + parameter.org;
    const loginResponse = this.httpService.create(this.urlForLogin , requestParameter);
    loginResponse.subscribe(response => {
     if (response.status === 200) {
      this.sessionService.setSessionItem(sessionKey.name, parameter.name);
     }
    });
    return loginResponse;
  }

  getSecurityQuestion(userName , domain) {
    this.urlForSecurityQuestion = 'http://localhost:90/security-web/anonymous/json/users/userName/'+userName+'/domainName/'+domain+'/security/question';
    return this.httpService.read(this.urlForSecurityQuestion);
  }

  getSecurityAnswerValidate(userName , domain , answer) {
    this.urlSecurityAnswerValidate = 'security-web/anonymous/json/users/userName/'+userName+"/domainName/"+domain+"/security/answer/"+answer+"/validate";
    return this.httpService.read(this.urlSecurityAnswerValidate);
  }

  getFetchUsers(userName , domain) {
    const urlFetchUsers = `security-web/anonymous/json/users/domainName/${domain}/userName/${userName}`;
    return this.httpService.read(urlFetchUsers);
  }

}
