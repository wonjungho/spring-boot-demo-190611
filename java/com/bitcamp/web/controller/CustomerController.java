    
package com.bitcamp.web.controller;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * CustomerController
 */
@RestController
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;


    @RequestMapping("/count")   
    public String count() {
        System.out.println("CustomerController count() 경로로 들어옴");
        int count = customerService.countAll();
        System.out.println("고객의 총인원 : "+count);
        return count+"";
    }

    @RequestMapping("/login/{customerId}/{password}") // annotation
    public String login(@PathVariable("customerId")String id,@PathVariable("password") String pass){ // notation

        System.out.println("AJAX로 넘어온 ID :"+id);
        System.out.println("AJAX로 넘어온 PASSWORD :"+pass);
        customer.setCustomerId(id);
        customer.setPassword(pass);
        System.out.println("Customer Controller login() 진입완료!");
        return (customerService.login(customer)!=null)?"success":"fail";
    }
}