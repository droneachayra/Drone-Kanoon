import { HttpClient ,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

     signup(data:any):Observable<any>{
      console.log(data);
      return this.http.post('https://dronekanoon-backend.onrender.com/auth/register',data)
     }
    } 