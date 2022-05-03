import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import JSONObject from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private static apiUrl: string;
  private static endpoint: string;

  private static readonly options = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) {
    SortingService.apiUrl = environment.api;
    SortingService.endpoint = 'sort/';
  }

  bubble(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'bubble', {array}, SortingService.options);
  }

  bogo(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'bogo', {array}, SortingService.options);
  }

  counting(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'counting', {array}, SortingService.options);
  }

  quick(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'quick', {array}, SortingService.options);
  }

  merge(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'merge', {array}, SortingService.options);
  }

  tim(array: number[]):Observable<JSONObject> {
    return this.http.post<JSONObject>(SortingService.apiUrl + SortingService.endpoint + 'tim', {array}, SortingService.options);
  }
}
