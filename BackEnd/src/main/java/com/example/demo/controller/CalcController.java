package com.example.demo.controller;

import com.example.demo.service.CalcService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Calculation")
public class CalcController {
    CalcService calcService;

    public CalcController(CalcService calcService) {
        this.calcService = calcService;
    }

    @GetMapping("/mod/{num1}/{num2}")
    public String  mod(@PathVariable("num1") String num1, @PathVariable("num2") String num2){
        if (num2.equalsIgnoreCase("0")){
            return null;
        }
        double op1 = Double.parseDouble(num1);
        double op2 = Double.parseDouble(num2);
        double result = calcService.mod(op1, op2);
        return String.valueOf(result);
    }

    @GetMapping("/inverse/{num1}")
    public String  inverse(@PathVariable("num1") String num1){
        double op1 = Double.parseDouble(num1);
        double result = calcService.inverse(op1);
        return String.valueOf(result);
    }

    @GetMapping("/squaring/{num1}")
    public String  squaring(@PathVariable("num1") String num1){
        double op1 = Double.parseDouble(num1);
        double result = calcService.squaring(op1);
        return String.valueOf(result);
    }

    @GetMapping("/squareRoot/{num1}")
    public String  squareRoot(@PathVariable("num1") String num1){
        double op1 = Double.parseDouble(num1);
        double result = calcService.squareRoot(op1);
        return String.valueOf(result);
    }

    @GetMapping("/division/{num1}/{num2}")
    public String  division(@PathVariable("num1") String  num1, @PathVariable("num2") String  num2){
        if (num2.equalsIgnoreCase("0")){
            return null;
        }
        double op1 = Double.parseDouble(num1);
        double op2 = Double.parseDouble(num2);
        double result = calcService.division(op1, op2);
        return String.valueOf(result);
    }

    @GetMapping("/multiplication/{num1}/{num2}")
    public String  multiplication(@PathVariable("num1") String  num1, @PathVariable("num2") String  num2){
        double op1 = Double.parseDouble(num1);
        double op2 = Double.parseDouble(num2);
        double result = calcService.multiplication(op1, op2);
        return String.valueOf(result);
    }

    @GetMapping("/subtract/{num1}/{num2}")
    public String  subtract(@PathVariable("num1") String  num1, @PathVariable("num2") String  num2){
        double op1 = Double.parseDouble(num1);
        double op2 = Double.parseDouble(num2);
        double result = calcService.subtract(op1, op2);
        return String.valueOf(result);
    }

    @GetMapping("/add/{num1}/{num2}")
    public String  addNumbers(@PathVariable("num1") String num1, @PathVariable("num2") String  num2){
        double op1 = Double.parseDouble(num1);
        double op2 = Double.parseDouble(num2);
        double result = calcService.add(op1, op2);
        return String.valueOf(result);
    }

    @GetMapping("/negate/{num1}")
    public String  negate(@PathVariable("num1") String  num1) {
        double op1 = Double.parseDouble(num1);
        double result = calcService.negate(op1);
        return String.valueOf(result);
    }
}


