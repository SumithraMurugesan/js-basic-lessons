// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-root',//should in kebab style
//   templateUrl: './app.component.html',
//   // template: '<h1>Inline html content</h1>',
//   styleUrls: ['./app.component.css']//optionl one
// })
// export class AppComponent {
//   title = 'demoa-app';
//   location = 'chennai';
//   total: number = 1000;
//   hits: number = 50;

//   onBoxValueChange(paramData: any) {
//     console.log("app component:" + paramData.value);
//   }
// }
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fg = new FormGroup({
    fname: new FormControl("", [Validators.required]), lname: new FormControl("", [Validators.required]), dob: new FormControl("", [Validators.required]), gender: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]), date: new FormControl("", [Validators.required]), time: new FormControl("", [Validators.required]), lab: new FormControl("", [Validators.required]), report: new FormControl("", [Validators.required])
    , result: new FormControl("", [Validators.required]), aadhar: new FormControl("", [Validators.required])
  });
  store: any = [];
  input: any;
  headers = ["First Name", "Last Name", "Date of Birth", "Gender", "City", "Date Of Test", "Time Of Test", "Lab Name",
    "Report Number", "Result", "Aadhar Number"];
  title: any;
  searchvalue: any = [];
  add() {
    if (this.fg.dirty === true) {
      console.log(this.store.push(this.fg.value));
      console.log(this.store);
      this.fg.reset();
      (<HTMLDivElement>document.getElementById("msg")).style.display = "none";
    }
    // else{
    //   alert("*************Please, must fill the empty fields in the form!!!**********");
    // }
  }
  search() {
    console.log((<HTMLDivElement>document.getElementById("find")).innerHTML);
    if ((<HTMLDivElement>document.getElementById("find")).innerText == "") {
      (<HTMLDivElement>document.getElementById("msg")).innerText = "***********THERE IS NO RECORD FOUND AND FIELD WAS EMPTY!!!*********";
    }
    this.input = (<HTMLInputElement>document.getElementById("find")).value;
    this.store.forEach((element: any) => {
      if (element.aadhar == this.input) {
        this.searchvalue.push(element);
      }
    });
    (<HTMLInputElement>document.getElementById("find")).value = "";
  }
  removefield() {
    (<HTMLTableRowElement>document.getElementById('tr')).style.display = "none";
  }
}

