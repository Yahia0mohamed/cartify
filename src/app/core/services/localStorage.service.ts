import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class LocalStorageService{
    constructor(private fetch:HttpClient){}
    setUserId(id:string){
        localStorage.setItem('user_id', id);
    }
    getUserId(){
        return localStorage.getItem('user_id');
    }
    setAuthToken(token:string){
        localStorage.setItem('auth_token',token );
    }
    getAuthToken(){
        return localStorage.getItem('auth_token');
    }
    removeAuthToken(){
        localStorage.removeItem('auth_token');
    }
    removeUserId(){
        localStorage.removeItem('user_id');
    }
}