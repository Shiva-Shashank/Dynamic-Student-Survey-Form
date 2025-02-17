// Name - P. Venkata Sai Krishna
// GNumber - G01409009
// This component displays the survey page.
// This component submits the form after validtions and displays correct error message if not submitted
import { Component } from '@angular/core';
import { SurveyService } from '../survey.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  surveyForm: FormGroup;

  constructor(private surveyService: SurveyService, private fb: FormBuilder) {

    this.surveyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfSurvey: ['', Validators.required],
      likedMostOptions: this.fb.array([], [Validators.required, Validators.minLength(2)]),
      likedMost: [''],
      interestedBy: ['', Validators.required],
      likelihood: ['', Validators.required],
      comments: [''],
    });

  }
  public likedMostOptions: Array<any> = [
    { id: "likedStudents", value: 'Students' },
    { id: "likedLocation", value: 'Location' },
    { id: "likedCampus", value: 'Campus' },
    { id: "likedAtmosphere", value: 'Atmosphere' },
    { id: "likedDormRooms", value: 'Dorm Rooms' },
    { id: "likedSports", value: 'Sports' },
  ];
  onCheckChange(event: any) {
    const formArray: FormArray = this.surveyForm.get('likedMostOptions') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      for (let i = 0; i < formArray.length; i++) {
        const ctrl = formArray.at(i) as FormControl; // Cast to FormControl

        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the formArray
          formArray.removeAt(i);
          return;
        }
      }

    }
  }


  onSubmit(): void {
    if (this.surveyForm.valid) {
      const likedMostString = this.surveyForm.value.likedMostOptions.join(', ');
      const modifiedFormValue = {
        ...this.surveyForm.value,
        likedMost: likedMostString,
      };    
      console.log("Its valid form");
      console.log(modifiedFormValue);
      this.surveyService.submitSurvey(modifiedFormValue, "/uploadData").subscribe(
        (response) => {
          // Handle success response
          console.log('Form submitted successfully', response);
          alert(response.message);

          this.surveyForm.reset();
          this.surveyForm.reset({ likedMost: '' });

          const formElement = document.getElementById('surveyForm') as HTMLFormElement;
          formElement.reset();
  
        },
        (error) => {
          // Handle error
          console.error('Error submitting form', error.error);
          alert(error.error.message);
        }
      );
    }
    else {
      console.log(this.surveyForm.value);
      console.log("Its invalid form");
      this.surveyForm.markAllAsTouched();
    }
  }
}
