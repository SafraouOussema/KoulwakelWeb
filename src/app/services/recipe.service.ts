import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public API = '//41.226.28.96:8090/application';
  public ingid_API = this.API + '/recipes/';


  constructor(private http: HttpClient) {

  }
  getAll(): Observable<any> {
    return this.http.get(this.API + '/recipes', { responseType: 'json' });
  }



}
