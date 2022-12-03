import { Component } from '@angular/core';

import {
  faDivide,
  faPercentage,
  faBackspace,
  faSquareRootAlt,
  faTimes,
  faMinus,
  faPlus,
  faEquals
} from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from '../calculator.service';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  faDivide = faDivide;
  faPercentage = faPercentage;
  faBackspace = faBackspace;
  faSquareRootAlt = faSquareRootAlt;
  faTimes = faTimes;
  faMinus = faMinus;
  faPlus = faPlus;
  faEquals = faEquals;

  constructor(private calculatorService: CalculatorService) { }

  equation: string = "";                    //To display equation in upperScreen
  result: string = "0";                     //To display resulr & operands in lowerScreen

  operation: string = "";                   //To send the word to backend
  operationSymbol: string = "";             //To display symbol

  checkNoMoreOperation: boolean = false;    //To check operation has entered before and don't need to add another operation
  checkDot: boolean = false;                //To check only one dot in the number
  checkUnaryOperation: boolean = false;     //To check if coming from unaryOperation or not
  checkPressedEqual : boolean = false;

  operand1: string = "";
  operand2: string = "";



  binaryEvaluation(operation: string, operand1: string, operand2: string) {
    this.calculatorService.binaryOperation(operation, operand1, operand2).subscribe(
      (response) => {
        if (response == null) {
          this.result = 'E';
        }
        else {
          this.result = response;
        }
      }
    )
  }

  unaryEvaluation(operation: string, operand1: string) {
    this.calculatorService.unaryOperation(operation, operand1).subscribe(
      (response) => {
        if (response == null) {
          this.result = 'E';
        }
        else {
          this.result = response;
        }
      }
    )
  }



  numberInput(num: string) {
    if (this.result.length >= 10) { return }

    else if(this.result == 'E' || this.checkPressedEqual){
      this.result = num;
      this.checkPressedEqual = false;
    }
    else if (this.checkUnaryOperation) {
      this.result = num;
      this.checkUnaryOperation = false;
    }
    else if (num == '.') {
      this.result += this.checkDot ? "" : '.';
      this.checkDot = true;
    }
    else if (this.result == '0') {
      this.result = num;
    }
    else {
      this.result += num;
    }
  }

  deleteAll() { //C : reset All operations & operands
    this.equation = ""; 
    this.result = "0";

    this.operation = ""; 
    this.operationSymbol = ""; 

    this.checkNoMoreOperation = false; 
    this.checkDot = false; 
    this.checkUnaryOperation = false; 

    this.operand1 = "";
    this.operand2 = "";
  }

  deleteResult() { //CE
    this.result = "0";
    this.checkDot = false;
  }

  backspace() {
    this.result = this.result.toString();
    this.result = this.result.slice(0, -1);
    if (this.result.length == 0) {
      this.result = '0';
    }
  }



  equal() {
    this.checkPressedEqual = true;
    if (this.checkNoMoreOperation) {
      this.operand2 = this.result;
      this.binaryEvaluation(this.operation, this.operand1, this.operand2);

      this.checkNoMoreOperation = false;
      this.equation += this.result;
    }
    else {
      this.equation = this.result + this.operationSymbol + this.operand2;
      this.binaryEvaluation(this.operation, this.result, this.operand2);
    }
  }

  arithmeticBinaryOperation(character: string) {
    if (character == '+') {
      this.operation = 'add';
      this.operationSymbol = ' + ';
    }
    else if (character == '-') {
      this.operation = 'subtract';
      this.operationSymbol = ' - ';
    }
    else if (character == 'x') {
      this.operation = 'multiplication';
      this.operationSymbol = ' x ';
    }
    else if (character == '÷') {
      this.operation = 'division';
      this.operationSymbol = ' ÷ ';
    }
    else if (character == '%') {
      this.operation = 'mod';
      this.operationSymbol = ' % ';
    }

    this.equation = ((this.checkNoMoreOperation) ? this.operand1 : this.result) + this.operationSymbol;
    this.operand1 = (this.checkNoMoreOperation) ? this.operand1 : this.result;
    this.result = "0";
    this.checkNoMoreOperation = true;
    this.checkDot = false;

  }

  arithmeticUnaryOperation(operationName: string) {
    if (operationName == 'negate') {
      this.operation = 'negate';
      this.equation = "Negate (" + this.result + ")";
    }
    else if (operationName == 'inverse') {
      this.operation = 'inverse';
      this.equation = "Inverse (" + this.result + ")";
    }
    else if (operationName == 'squaring') {
      this.operation = 'squaring';
      this.equation = "Square (" + this.result + ")";
    }
    else if (operationName == 'squareRoot') {
      this.operation = 'squareRoot';
      this.equation = "Sqrt (" + this.result + ")";
    }
    this.checkUnaryOperation = true;
    this.operand1 = this.result;
    this.unaryEvaluation(this.operation, this.operand1);
  }

}
