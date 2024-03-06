import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaList, Media } from './media';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http: HttpClient,
  ) { }

  getHeadliner(): Observable<Media>{
    return this.http.get<MediaList>('https://api.themoviedb.org/3/discover/movie?api_key=c020056aace65664ad1c3a8e9ef00a05&sort_by=popularity.desc')
    .pipe(map(response => response.results[0]))
  }

  getTopTen(): Observable<Media[]>{
    return this.http.get<MediaList>('https://api.themoviedb.org/3/discover/movie?api_key=c020056aace65664ad1c3a8e9ef00a05&sort_by=popularity.desc')
    .pipe(map(response => response.results.slice(0, 10)))
  }
}
