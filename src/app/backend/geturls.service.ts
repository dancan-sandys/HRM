import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeturlsService {



  constructor(private http: HttpClient) {

  }

  

  get(uri:any) {
    this.http.get(`http://localhost:8000/${uri}`)
  }

  post(uri: any, content:any) {
    this.http.post(`http://localhost:8000/${uri}`, content)
  }

  delete(uri: any, content: any) {
    this.http.delete(`http://localhost:8000/${uri}`, content)
  }

  put(uri: any, content: any) {
    this.http.put(`http://localhost:8000/${uri}`, content)
  }

}
