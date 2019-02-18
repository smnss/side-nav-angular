import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private static configPath = 'http://10.145.70.99:9090/gateway/';

  constructor(private http: HttpClient) {}

  private getConfigPath(): string {
    if (!ConfigService.configPath) {
      ConfigService.configPath = environment.config;
    }
    return ConfigService.configPath;
  }

  getConfig(): string {
  //  return this.http.get(this.getConfigPath());
  return ConfigService.configPath;
  }
}
