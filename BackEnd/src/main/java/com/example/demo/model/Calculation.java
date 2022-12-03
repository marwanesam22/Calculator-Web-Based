package com.example.demo.model;

import org.springframework.stereotype.Component;

@Component
public class Calculation {
    private int num1 ;
    private int num2 ;
    private char operation;

    public int getNum1() {
        return num1;
    }

    public void setNum1(int num1) {
        this.num1 = num1;
    }

    public int getNum2() {
        return num2;
    }

    public void setNum2(int num2) {
        this.num2 = num2;
    }

    public char getOperation() {
        return operation;
    }

    public void setOperation(char operation) {
        this.operation = operation;
    }

}
