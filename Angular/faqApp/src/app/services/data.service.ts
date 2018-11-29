import { Injectable } from "@angular/core";
import { Question } from "../models/Question";

@Injectable({
  providedIn: "root"
})
export class DataService {
  questions: Question[];

  constructor() {
    /*  this.questions = [
      {
        text: "what your favorite color ?",
        answer: "Purple",
        hide: true
      },
      {
        text: "what is your favorite language ?",
        answer: "JavaScript",
        hide: true
      },
      {
        text: "what is your name ?",
        answer: "my name is kamal",
        hide: true
      }
    ];*/
  }

  getQuestions() {
    if (localStorage.getItem("questions") === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem("questions"));
    }
    console.log("les questions", this.questions);
    return this.questions;
  }
  addQuestionToService(question: Question) {
    if (localStorage.getItem("questions") === null) {
      this.questions = [];
      console.log(this.questions);
      this.questions.unshift(question);
      localStorage.setItem("questions", JSON.stringify(this.questions));
    } else {
      this.questions = JSON.parse(localStorage.getItem("questions"));
      this.questions.unshift(question);
      localStorage.setItem("questions", JSON.stringify(this.questions));
    }
  }

  removeQuestionToService(question: Question) {
    for (let index = 0; index < this.questions.length; index++) {
      if (question == this.questions[index]) {
        this.questions.splice(index, 1);
        localStorage.setItem(
          "questions",
          JSON.stringify(this.questions.splice(index, 1))
        );
      }
    }
  }
}
