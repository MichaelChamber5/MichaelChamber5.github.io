package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DoubleController {

    @GetMapping("/double")
    public int doubleNumber(@RequestParam int number) {
        return number * 2;
    }
}
