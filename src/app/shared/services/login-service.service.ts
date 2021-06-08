import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserInfo } from '../interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
  


export class LoginServiceService {
  constructor(private _http: HttpClient) { }
}
