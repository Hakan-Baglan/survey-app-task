import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestDetailsComponent } from './component/guest-details/guest-details.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'guest-details',component: GuestDetailsComponent
  },
  {
    path: 'questionnaire',component: QuestionnaireComponent  
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
