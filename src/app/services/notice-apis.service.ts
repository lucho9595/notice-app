import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeApisService {

  constructor(private http: HttpClient) { }

  getNotices(params: any): Observable<any> {
    const url = ' https://newsapi.org/v2/top-headlines?country=' + params.country + '&category=' + params.category + '&apiKey=bef0e0429ded4c129c9095c02b7c6f48';
    return this.http.get(url)
  }
}
