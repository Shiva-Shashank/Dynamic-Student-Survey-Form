// Name - P. Venkata Sai Krishna
// GNumber - G01409009
// This component displays all the surveys submitted till now in a table
import { Component,OnInit  } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit{
  surveys: any[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    // Fetch surveys from the server
    this.surveyService.getSurveys('/getData').subscribe(
      (data: any[]) => {
        this.surveys = data;
      },
      (error) => {
        console.error('Error fetching surveys', error);
      }
    );
  }

}
