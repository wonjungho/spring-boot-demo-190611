package com.bitcamp.web.serviceimpl;

import java.util.List;

import com.bitcamp.web.domain.ShipperDTO;
import com.bitcamp.web.service.ShipperService;

import org.springframework.stereotype.Service;

/**
 * ShipperServiceImpl
 */
@Service
public class ShipperServiceImpl implements ShipperService {

    @Override
    public void addShipper(ShipperDTO shipper) {

    }

    @Override
    public List<ShipperDTO> findShippers() {
        return null;
    }

    @Override
    public List<ShipperDTO> findShippersByOption(ShipperDTO option) {
        return null;
    }

    @Override
    public ShipperDTO findShipperByshipperId(String shipperId) {
        return null;
    }

    @Override
    public void updateShipper(ShipperDTO shipper) {

    }

    @Override
    public void delteShipper(ShipperDTO shipper) {

    }

    
}