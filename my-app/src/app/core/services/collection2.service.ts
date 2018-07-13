import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item2 } from '../../shared/interfaces/item2';

@Injectable({
  providedIn: 'root'
})
export class Collection2Service {
  private urlApi = 'api/collection2';  // URL to web api
  private _collection2: Observable<Item2[]>;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.collection2 = this.http.get<Item2[]>(this.urlApi);
  }

  /**
   * get collection
   */
  public get collection2(): Observable<Item2[]> {
    return this._collection2;
  }

  /**
   * set collection
   */
  public set collection2(col: Observable<Item2[]>) {
    this._collection2 = col;
  }

  public add(item: Item2): Observable<any> {
    return this.http.post<Item2>(this.urlApi, item, this.httpOptions);
  }

  public delete(item: Item2): Observable<any> {
    const url = `${this.urlApi}/${item.id}`;
    return this.http.delete<Item2>(url, this.httpOptions);
  }

  public update(item: Item2): void {
  }
}
