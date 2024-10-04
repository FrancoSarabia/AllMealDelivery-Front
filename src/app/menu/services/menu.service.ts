import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:8000/menu/menus/';

  constructor(private http: HttpClient) { }

  createMenu(menuData: any): Observable<any> {
    return this.http.post(this.apiUrl, menuData);
  }
}
