import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';

// Service
import { QuestionsData} from './questions.data';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.stylesheet.scss']
})
export class QuestionsComponent implements OnInit {

    constructor(
        private router: Router,
        private http: Http,
        private questionsData: QuestionsData
        ) {
    }

    data: any = {};
    questionData: any[] = [];
    currentPage: number;
    answer: any[] = [];
    textForm: boolean;
    radioForm: boolean;
    checkboxValue: any[] = [];

    ngOnInit() {
        // Fetch data from question.json
        this.http.get(`http://localhost:4200/assets/question.json`)
        .subscribe((data) => {
            this.data = data.json();
            this.questionData = data.json().questions;
            this.questionsData.setData('questionsList', this.questionData);
            this.currentPage = 1;
        });
    }

    // Function for next button - to go to next page
    next() {
        this.currentPage = this.currentPage + 1;
        this.questionsData.setData('answersList', this.answer);

        if (this.currentPage === this.questionData.length + 1) {
            this.router.navigate(['app-result']);
        }
    }

    // Function for previous button - to go to previous page
    previous() {
        this.currentPage = this.currentPage - 1;
    }

    // Function to take up the data which values generated from checked checkbox
    selectCheckbox (e, option) {
        if (e.target.checked) {
          this.checkboxValue.push(option);
        } else {
          this.checkboxValue.splice(this.checkboxValue.indexOf(option), 1);
        }
        this.questionsData.setData('checkboxList', this.checkboxValue);
    }

}
