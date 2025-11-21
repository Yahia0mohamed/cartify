import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginData } from './login-data';
import { RegisterData } from './register-data';
import { User } from './user';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@core/services/localStorage.service';


@Injectable({ providedIn: 'root' })
export class AuthService{
    private baseUrl = environment.APIURL;
    constructor(private fetch:HttpClient,private localStorage:LocalStorageService){}
    login(data:LoginData){
        return this.fetch.post(`${this.baseUrl}/auth/login`,data);
    }
    regester(data: RegisterData): Observable<User> {
        return this.fetch.post<User>(`${this.baseUrl}/users`, data);
    }
    isLoggedIn(): boolean {
    return !!this.localStorage.getAuthToken();
    }
    logout() {
        this.localStorage.removeAuthToken();
        this.localStorage.removeUserId();
    }

}