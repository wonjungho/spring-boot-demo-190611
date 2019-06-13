package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.ShipperDTO;

import org.springframework.stereotype.Repository;

/**
 * ShipperMapper
 */
@Repository
public interface ShipperMapper {
    
    public void insertShipper(ShipperDTO shipper);

    public List<ShipperDTO> selectShippers();

    public List<ShipperDTO> selectShippersByOption(ShipperDTO option);

    public ShipperDTO selectShipperByshipperId(String shipperId);

    public void updateShipper(ShipperDTO shipper);
    
    public void delteShipper(ShipperDTO shipper);

    
}