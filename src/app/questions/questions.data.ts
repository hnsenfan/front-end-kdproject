import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsData {
    data = {
        questions: [],
        answers: []
    };

    constructor() {
    }

    clearData() {

        this.data = {
            questions: [],
            answers: []
        };

        sessionStorage.clear();
    }

    getData (key: string) {
        return this.data[key];
    }

    setData (key: string, data: any) {
        this.data[key] = data;
    }
}
