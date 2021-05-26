import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  movieDate: any;

  constructor(private httpClient: HttpClient) { }

  getMovieData(){

    return this.httpClient.get('http://movie-database-imdb-alternative.p.rapidapi.com');

  }

  ngOnInit(): void {
  }

}
