// Name - P. Venkata Sai Krishna
// GNumber - G01409009
// This component is the routing component and displays the correct component based on the path in the web browser
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { SurveysListComponent } from './surveys-list/surveys-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'surveys-list', component: SurveysListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
