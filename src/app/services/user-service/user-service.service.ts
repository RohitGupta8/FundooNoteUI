import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService ) { }

  Register(data: any) {
    const params = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
    return this.httpService.post(`${environment.baseUrl}/register`, params)
  }
  Login(data: any) {
    const params = {
      email: data.email,
      password: data.password
    }
    return this.httpService.post(`${environment.baseUrl}/login`, params)
  }

  Forgot(data: any) {
    const params = {
      email: data.email
    }
    return this.httpService.post(`${environment.baseUrl}/forgotPassword`, params)
  }

  ResetPassword(data: any) {
    const params = {
      email: data.email,
      password: data.password,
      code: data.code
    }
    return this.httpService.patch(`${environment.baseUrl}/resetPassword`, params)
  }
}
