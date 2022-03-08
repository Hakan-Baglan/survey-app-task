import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbFlipCardComponent } from '@nebular/theme';
import { ISurvey, ISurveyLine } from 'src/app/models/questionnaire.mode.';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaire!: ISurvey;
  results: any = [];
  npsArray = new Array(10).fill({}).map((v, index) => index + 1);
  smileArray = [
    {
      text: 'Çok memnunum',
      value: 10
    }, {
      text: 'Memnunum',
      value: 8
    }, {
      text: 'Vasat',
      value: 6
    }, {
      text: 'Memnun değilim',
      value: 4
    },
    {
      text: 'Hiç memnun değilim',
      value: 2
    },
  ];
  @ViewChild('flipCard') nbflipcard!: NbFlipCardComponent;
  constructor(private questionnaireService: QuestionnaireService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.questionnaireService.getQuestionnaire().subscribe((res) => {
      this.questionnaire = res;
      console.log(res);
    })

  }
  setAnswer(question: any, answer: number, answerText: string) {
    delete question.id;
    question['answer_numeric'] = answer;
    question['answer'] = answerText;
  }

  postQuestionnaire(not: string) {
    this.questionnaireService.answer(this.questionnaire.survey_lines, not).subscribe((res) => {
      this.results = res;
      this.nbflipcard.toggle();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }




}
