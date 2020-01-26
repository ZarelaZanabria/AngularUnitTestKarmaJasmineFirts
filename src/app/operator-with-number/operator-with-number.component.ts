import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-operator-with-number',
  templateUrl: './operator-with-number.component.html',
  styleUrls: ['./operator-with-number.component.css']
})
export class OperatorWithNumberComponent implements OnInit {

  @ViewChild('result', {static : false} ) result: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  add( num1, num2) {
      return Number(num1) + Number(num2);
  }

  printAdd(num1 : number , num2 : number){
      this.result.nativeElement.value = this.add(num1, num2);
  }



}
