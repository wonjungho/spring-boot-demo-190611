package com.bitcamp.web.controller;

import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeContoller
 */
@Controller
public class HomeContoller {

    @Autowired CustomerService customerService;
    @RequestMapping("/")
    public String index(){
        int count =customerService.countAll();
        System.out.println("HomeContoller index() 경로진입완료!");
        System.out.println("고객의 총인원: "+count);
        return "index";
    }
    
}