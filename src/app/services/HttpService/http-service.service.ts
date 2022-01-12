import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  post(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    return this.http.post(url, data, isHeaderRequired && headers)
  }

  patch(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    return this.http.patch(url, data, isHeaderRequired && headers)
  }
}
