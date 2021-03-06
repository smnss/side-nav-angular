import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { catchError, concatMap, map, retryWhen, tap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrlSecurity = 'http://localhost:90/security-web/json/security';

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService,
    private sessionService: SessionService,
  ) {}

  public create(urlEndPoint: string, body: any): Observable<any> {
    return this.httpPost(urlEndPoint, body);
  }

  public update(urlEndPoint: string, body: any): Observable<any> {
    return this.httpPut(urlEndPoint, body);
  }

  public read(urlEndPoint: string, queryOptions?: HttpParams): Observable<any> {
    return this.httpGet(urlEndPoint);

  //   const configEvent: Observable<any> = this.config.getConfig()
  //   .pipe(map(configValue => configValue.baseApiUrl + urlEndPoint));
  //   const httpEvent: Observable<HttpResponse<any>> = configEvent.pipe(
  //   concatMap(fqUrl => this.httpGet(fqUrl, queryOptions ))
  // );

  //   return httpEvent.pipe(
  //   tap(response => {
  //     // this.loggingService.LogApiResponse(response);

  //     // HttpService.inspectResponse(response.status, response.url);
  //   })
  // );

  //   this.getApiUrl(urlEndPoint).subscribe(apiUrl => {
  //   return this.httpGet(apiUrl, queryOptions)
  // });
  //  return getMethod() {
  //    return this.httpGet(fqUrl, queryOptions)
  //   }
    // const httpEvent: Observable<HttpResponse<any>> = this.getApiUrl(urlEndPoint).pipe(
    //   concatMap(fqUrl => this.httpGet(urlEndPoint, queryOptions))
    // );
    // return httpEvent.pipe(
    //   tap(response => {
    //     this.loggingService.LogApiResponse(response);

    //     HttpService.inspectResponse(response.status, response.url);
    //   }),
    //   catchError(this.handleError)
    // );

  }

  public delete(urlEndPoint: string) {
    return this.httpDelete(urlEndPoint);
  }

  private httpGet(endpointUrl: string, params?: HttpParams): Observable<HttpResponse<any>> {
     const headers = this.getRequestHeaders();
     const options: object = { params, observe: 'response' };
     return this.httpClient.get<any>(this.getApiUrl(endpointUrl), options);
  }

  private httpPost(endpointUrl: string, body: any): Observable<HttpResponse<any>> {
    // if (endpointUrl !== 'login') {
    //   const headers = this.getRequestHeaders();
    //   // tslint:disable-next-line:ban-types
    //   const Autherizationoptions: object = { headers, observe: 'response' };
    //   return this.httpClient.post<any>(this.getApiUrl(endpointUrl), body, Autherizationoptions);
    // } else {
    const headers = this.getRequestHeaders('urlencoded');
    const options: object = { headers, observe: 'response' };
    return this.httpClient.post<any>(this.getApiUrl(endpointUrl), body, options);
    //  const headers = this.getRequestHeaders('urlencoded');
      // tslint:disable-next-line:ban-types
      // const options: Object = { headers, observe: 'response', responseType: 'text' };
      // return this.httpClient.post<any>(endpointUrl, body, options).pipe(
      //   catchError(this.handleError)
      // );
    // }
  }

  private httpPut(endpointUrl: string, body: any): Observable<HttpResponse<any>> {
    const headers = this.getRequestHeaders('multiPart');
    const options: object = { headers, observe: 'response' };
    return this.httpClient.patch<any>((endpointUrl), body, options);
  }

  private httpDelete(endpointUrl: string, id?: string): Observable<HttpResponse<any>> {
    const headers = this.getRequestHeaders();
    const options: object = { headers, observe: 'response' };
    return this.httpClient.delete<any>(this.getApiUrl(endpointUrl), options);
  }

  private getRequestHeaders(contentType?: string): HttpHeaders {
    let headers = new HttpHeaders();
    const accessToken: string = this.sessionService.getAccessToken();
    if (accessToken) {
      if (contentType === 'multiPart') {
        headers = headers.set('authorization', accessToken);
        // .set('Content-Type', 'multipart/form-data')
        // .set('Accept', 'application/json, text/plain, */*');
      } else {
        headers = headers
          .set('authorization', accessToken)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json, text/plain, */*');
      }
    } else if (contentType === 'urlencoded') {
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    } else {
      headers = headers
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json, text/plain, */*');
    }
    return headers;
  }

  public getApiUrl(requestUrl) {
    return this.config.getConfig() + requestUrl;
  }

  private handleError(err: HttpErrorResponse) {
    return of(err);
}

}
