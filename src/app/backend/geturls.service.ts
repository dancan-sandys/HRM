import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GeturlsService { 



  constructor(private http: HttpClient) {

  }

  httpHeaders:HttpHeaders =new HttpHeaders({'Content-Type':'application/json'})

  get(uri: any) {
    return this.http.get(`http://localhost:8000/${uri}`,
    {headers: this.httpHeaders})
  }

  post(uri: any, content: any) {
    return this.http.post(`http://localhost:8000/${uri}`, content,
      { headers: this.httpHeaders })
  }

  delete(uri: any, content: any) {
    return this.http.post(`http://localhost:8000/${uri}`, content,
      { headers: this.httpHeaders })
  }

  put(uri: any, content: any) {
    return this.http.put(`http://localhost:8000/${uri}`, content,
      { headers: this.httpHeaders })
  }

}
