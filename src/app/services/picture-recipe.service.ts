import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureRecipeService {
  public API = 'http://41.226.28.96:8090/application';
  public ingid_API = this.API + '/pictureRecipes/';


  constructor(private http: HttpClient) {

  }


  getAll(): Observable<any> {
    return this.http.get(this.API + '/pictureRecipes', { responseType: 'json' });
  }

  get(id: string) {
    return this.http.get(this.ingid_API+id , { responseType: 'blob' });
  }

}
