import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/movie/266856?api_key=c020056aace65664ad1c3a8e9ef00a05').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
