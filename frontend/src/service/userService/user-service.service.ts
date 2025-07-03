import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfac/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url: string = "http://localhost:1234/users/";
  public userConnected: string = "";
  public userConnectedObj: User | null = null;


  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}getall`)
  }
  getByPassName(pass : string , name : string) : Observable<User> {
    return this.http.get<User>(`${this.url}getbypn/${pass}/${name}`);
  }
  getFavorites(idU: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.url}names/${idU}`);
  }
  addFavorite(idR: string, idU: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}addfavorite/${idR}/${idU}`, {});
  }
  addUser(newUser: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}add`, newUser);
  }

}
