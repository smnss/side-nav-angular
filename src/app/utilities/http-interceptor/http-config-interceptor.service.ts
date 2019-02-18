import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AlertService } from '../toaster/alert.service';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptorService implements HttpInterceptor {
  constructor(private alertService: AlertService) {}
  // tslint:disable-next-line:no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json, application/text'),
    });

    return next.handle(request).pipe(
      // tslint:disable-next-line:no-any
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.dir('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : 'Something went wrong!',
          status: error.status || ':(',
        };
        this.alertService.onError(data);
        return throwError(error);
      }),
    );
  }
}
