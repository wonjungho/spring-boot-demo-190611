package com.bitcamp.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeContoller
 */
@Controller
public class HomeContoller {

    @RequestMapping("/")
    public String index(){
        System.out.println("됐다.");
        return "index";
    }
    
}