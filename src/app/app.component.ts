import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ariaDemo';

  toggle = false
  toggle1 = false
  toggle2 = false

  ariaExpanded = 'false'

  input = document.querySelector('input')

  log = ""

  dropdown = document.getElementById('btn1')

  changeToggle(){
    this.toggle = ! this.toggle;
    this.ariaExpanded = !this.toggle ? 'true' : 'false'
  }

  showHide() {
    return this.toggle ? "none":"block";
  }

  changeToggle1() {
    this.toggle1 = !this.toggle1
  }

  changeToggle2() {
    this.toggle2 = !this.toggle2
  }

  showHide1() {
    return this.toggle1 ? "none":"block";
  }

  showHide2() {
    return this.toggle2 ? "none":"block";
  }

  updateName() {
    this.log = (document.getElementById('nameInput') as HTMLInputElement).value;

  }
}
