import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  url : string = "http://localhost:8080";
  constructor(private http : HttpClient) {}

  public binaryOperation(operation : string, operand1 : string, operand2:string) :Observable<string>{
      return this.http.get<string>(`${this.url}/Calculation/${operation}/${operand1}/${operand2}`);
  }

  public unaryOperation(operation : string, operand1 : string) :Observable<string>{
    return this.http.get<string>(`${this.url}/Calculation/${operation}/${operand1}`);
  }

}
