import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config!: Config;

  constructor(private http: HttpClient) {}

  async loadConfig() {
    return await lastValueFrom(
      this.http.get<Config>('./assets/config.json')
    ).then((config) => {
      this.config = config!;
    });
  }
}

export interface Config {
  apiUrl: string;

}
