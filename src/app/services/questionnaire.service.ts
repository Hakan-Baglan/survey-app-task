import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ISurvey, ISurveyLine } from '../models/questionnaire.mode.';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  url = environment.baseUrl + '/v2/api/main_survey/24';
  urlAnswer = environment.baseUrl + '/v2/api/survey_answer';

  constructor(private http: HttpClient) { }

  getQuestionnaire(): Observable<ISurvey> {
    return this.http.get<ISurvey>(this.url);
  }
  answer(questions: ISurveyLine[], not?: string): Observable<ISurvey> {
    const body: any = {
      survey_answers: questions,
      not
    }
    return this.http.post<ISurvey>(this.urlAnswer, body)
  }
}
