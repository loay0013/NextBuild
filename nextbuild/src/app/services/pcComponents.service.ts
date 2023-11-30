import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PcComponent } from 'src/app/models/pcComponents.model';

const baseUrl = 'http://localhost:8080/api/PcComponent';

@Injectable({
  providedIn: 'root'
})
export class PcComponentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PcComponent[]> {
    return this.http.get<PcComponent[]>(baseUrl);
  }

  get(id: any): Observable<PcComponent> {
    return this.http.get<PcComponent>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<PcComponent[]> {
    return this.http.get<PcComponent[]>(`${baseUrl}?title=${title}`);
  }
}
