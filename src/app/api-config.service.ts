import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(
    private http: HttpClient
  ) { }

  loadConfig(): any{
    return this.http.get<ApiConfig>("https://api.themoviedb.org/3/configuration?api_key=c020056aace65664ad1c3a8e9ef00a05")
    .subscribe(config => {
      localStorage.setItem('app-config', JSON.stringify(config))
    })
  }
}
