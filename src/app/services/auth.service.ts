import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, take, tap } from 'rxjs';
import { IAuth, IUser } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseUrl;
  user!: IUser | null;

  constructor(private http: HttpClient) { }

  login(user: IAuth): Observable<any> {
    this.logout();
    user.hotel_id = 3;
    return this.http.post(this.url + '/p_login', user).pipe(tap(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user as IUser;
    }));
  }
  
  logout() {
    this.user = null;
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return this.user != null && this.user != undefined;
  }

}
