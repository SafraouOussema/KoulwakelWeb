import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public API = 'http://41.226.28.96:8090/application';
  public ingid_API = this.API + '/recipes/';

  public step_API = this.API +'/Step/recipeid/';
  public instruction_API = this.API+'/instructions/stepid/';
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<any> {
    return this.http.get(this.API + '/recipes', { responseType: 'json' });
  }


  get(id: string) {
    return this.http.get(this.ingid_API+id , { responseType: 'blob' });
  }

  getrecipid(id:string): Observable<any> {
    return this.http.get(this.API + '/recipes/recipeid/'+id, { responseType: 'json' });
  }


  getstepid(id:string): Observable<any> {
    return this.http.get(this.step_API+id, { responseType: 'json' });
  }

  getinstructionid(id:string): Observable<any> {
    return this.http.get(this.instruction_API+id, { responseType: 'json' });
  }



}
