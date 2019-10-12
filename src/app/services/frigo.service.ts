import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class FrigoService {
  public API = 'http://41.226.28.96:8090/application';
  public ingid_API = this.API + '/fridge/userName/';


  constructor(private token: TokenStorageService ,private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/fridge', { responseType: 'json' });
  }

  get(id = this.token.getUsername()) : Observable<any> {
    return this.http.get(this.ingid_API+id,{ responseType: 'json' });
  }
}
