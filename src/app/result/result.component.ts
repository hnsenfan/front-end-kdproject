import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Service
import { QuestionsData} from '../questions/questions.data';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./../questions/questions.stylesheet.scss']
})
export class ResultComponent implements OnInit {
    constructor(
        private router: Router,
        private questionsData: QuestionsData
        ) {
    }

    data: any = {};
    questionData: any[] = [];
    answersData: any;
    checkboxData: any;

    ngOnInit() {

        // Fetch data from questions.data.ts service and store
        this.answersData = this.questionsData.getData('answersList');
        this.questionData = this.questionsData.getData('questionsList');
        this.checkboxData = this.questionsData.getData('checkboxList');
    }

    startOver() {
        // Navigate to home to start over the question-answer process
        this.router.navigate(['app-home']);
    }

}
