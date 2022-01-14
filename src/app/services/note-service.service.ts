import { Injectable } from '@angular/core';
import { HttpServiceService } from '../services/HttpService/http-service.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  headers = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
  };
  constructor(private httpService: HttpServiceService) { }
  CreateNote(data:any){
    return this.httpService.post(`${environment.baseUrl}/api/notes`, data, true, this.headers);
  }
}
