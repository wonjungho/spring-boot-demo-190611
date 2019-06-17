package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 */
@Repository
public interface CustomerMapper {
    
    public void insertCustomer(CustomerDTO customer);

    public List<CustomerDTO> selectCustomers();

    public List<CustomerDTO> selectCustomersByOption(CustomerDTO option);

    public CustomerDTO selectCustomerBycustomerId(String cutomerId);

    public void updateCustomer(CustomerDTO customer);

    public void deleteCustomer(CustomerDTO customer);

    public int selectCount();
    
    public CustomerDTO login(CustomerDTO customer);

    
}