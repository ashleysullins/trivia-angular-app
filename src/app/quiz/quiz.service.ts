import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class QuizService {

  constructor(private http: Http) {}
  	getQuestions() {
  		return this.http.get('//cocktail-trivia-api.herokuapp.com/api/sample')
  			.map((res: Response) => res.json());
  }
}
