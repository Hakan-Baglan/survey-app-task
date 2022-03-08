import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGuestDetails } from '../models/guset-detail.model';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestDetailsService {

  url = environment.baseUrl + '/v2/api/app_me';
  constructor(private http: HttpClient) { }

  getDetails(): Observable<IGuestDetails> {
    return this.http.get<IGuestDetails>(this.url);
  }

}
