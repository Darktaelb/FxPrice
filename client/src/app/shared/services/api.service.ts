import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  private serviceUrls: any;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly storageService: StorageService
  ) {
    this.serviceUrls = environment.serviceApis;
  }

  public requestAnonymously(
    service: string,
    method: string,
    params?: any,
    extractFunction?: any
  ): Observable<any> {
    const url = this.serviceUrls[service] + method;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    const request = this.isUndefined(params)
      ? this.httpClient.get(url, options)
      : this.httpClient.post(url, params, options);
    return request.pipe(map(extractFunction || this.extractData));
  }

  public request(
    service: string,
    method: string,
    params?: any,
    extractFunction?: any
  ): Observable<any> {
    const url = this.serviceUrls[service] + method;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authentication', token);
    }
    const options = { headers: headers };
    const request = this.isUndefined(params)
      ? this.httpClient.get(url, options)
      : this.httpClient.post(url, params, options);
    return request.pipe(map(extractFunction || this.extractData));
  }

  public put(
    service: string,
    method: string,
    params?: any,
    extractFunction?: any
  ): Observable<any> {
    const url = this.serviceUrls[service] + method;
    const token = this.storageService.getItemFromStorage('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authentication', token);
    }
    const options = { headers: headers };
    const request = this.httpClient.put(url, params, options);
    return request.pipe(map(extractFunction || this.extractData));
  }

  public delete(
    service: string,
    method: string,
    params?: any,
    extractFunction?: any
  ): Observable<any> {
    const url = this.serviceUrls[service] + method;
    const token = this.storageService.getItemFromStorage('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authentication', token);
    }
    const options = { headers: headers, body: params };
    const request = this.httpClient.delete(url, options);
    return request.pipe(map(extractFunction || this.extractData));
  }

  private extractData(res: any) {
    if (res._body == '') return {};
    let body = res;
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

  private isUndefined(value: any): boolean {
    return value === undefined;
  }
}
