import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbCardModule,
  NbButtonModule, NbTabsetModule, NbListModule, NbDialogModule,
  NbInputModule, NbAlertModule, NbToggleModule, NbToastrModule, NbGlobalPhysicalPosition, NbIconModule, NbFormFieldModule, NbStepperModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { GuestDetailsComponent } from './component/guest-details/guest-details.component';
import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';
import { AuthInterceptor } from './services/auth.interceptor';

const NEBULAR_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbButtonModule,
  NbTabsetModule,
  NbListModule,
  NbDialogModule.forRoot(),
  NbInputModule,
  NbAlertModule,
  NbToggleModule,
  NbIconModule,
  NbFormFieldModule,
  NbStepperModule,
  NbToastrModule.forRoot({
    duration: 2000,
    position: NbGlobalPhysicalPosition.BOTTOM_LEFT,
    hasIcon: false
  })
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuestDetailsComponent,
    QuestionnaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...NEBULAR_MODULES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
