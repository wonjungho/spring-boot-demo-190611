package com.bitcamp.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;

    @PostMapping("")
    public HashMap<String,Object> join(@RequestBody CustomerDTO param){
        HashMap<String,Object> map = new HashMap<>();
       
        return map; 
    }
    @GetMapping("")
    public List<CustomerDTO> list(){
        List<CustomerDTO> list=new ArrayList<>();
        list = customerService.findCustomers();
        for (CustomerDTO customer : list) {
            System.out.println(customer.getCustomerId()+':'+
                               customer.getCustomerName());
        };
        return list;
    }

    @GetMapping("/count")   
    public String count() {
        System.out.println("CustomerController count() 경로로 들어옴");
        int count = customerService.countAll();
        System.out.println("고객의 총인원 : "+count);
        return count+"";
    }

    @GetMapping("/{customerId}/{password}")
    public CustomerDTO login(@PathVariable("customerId")String id,
                        @PathVariable("password")String pass){
        
        customer.setCustomerId(id);
        customer.setPassword(pass);
        return customerService.login(customer);
    }

   
    @GetMapping("/{customerId}")
    public CustomerDTO getCustomer(@PathVariable String customerId) {
        System.out.println("ID 검색 진입 : "+customerId);
        return customerService.findCustomerByCustomerId(customerId);
    }

    @PutMapping("/{customerId}")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO param) {
        System.out.println("수정 할 객체: "+param.toString());
        int res = customerService.updateCustomer(param);
        System.out.println("====> "+res);
        if(res == 1){
            customer = customerService.findCustomerByCustomerId(param.getCustomerId());
        }else{
            System.out.println("컨트롤러 수정 실패");
        }
        return customer;
    }

    @DeleteMapping("/{customerId}")
    public HashMap<String,Object> deleteCustomer(@PathVariable String customerId) {
        HashMap<String, Object> map = new HashMap<>();
        customer.setCustomerId(customerId);
        customerService.deleteCustomer(customer);
        map.put("result", "탈퇴성공");
        return map;
    }
}