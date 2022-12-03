package com.example.demo.service;

import com.example.demo.model.Calculation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalcService {

    public double mod(double num1, double num2){
        double result = num1 % num2;
        return result;
    }

    public double inverse(double num1){
        double result = 1 / num1 ;
        return result;
    }

    public double squaring(double num1){
        double result = num1 * num1;
        return result;
    }
    public double squareRoot(double num1){
        double result = Math.sqrt(num1);
        return result;
    }
    public double division(double num1, double num2){
        double result = num1 / num2;
        return result;
    }
    public double multiplication(double num1, double num2){
        double result = num1 * num2;
        return result;
    }
    public double subtract(double num1, double num2){
        double result = num1 - num2;
        return result;
    }
    public double add(double num1, double num2){
        double result = num1 + num2;
        return result;
    }
    public double negate(double num1){
        double result = -1 * num1;
        return result;
    }


}
