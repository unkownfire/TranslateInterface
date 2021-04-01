import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Translation } from './translation'
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }
  httpOptions = {

      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  translateText(text: string, source: string, target: string): Observable<any> {
    return this.http.post("http://localhost:8080/api/translate",
    {
      'q' : text,
      'source' : source,
      'target' : target
    });
  }
}
