package com.example.backend.service.impl;

import com.example.backend.entity.Customer;
import com.example.backend.entity.Order;
import com.example.backend.entity.OrderItem;
import com.example.backend.payload.Purchase;
import com.example.backend.payload.PurchaseResponse;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.service.CheckoutService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository)
    {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item->order.add(item));
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());
        Customer customer = purchase.getCustomer();
        customer.add(order);
        customerRepository.save(customer);
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber()
    {
        return UUID.randomUUID().toString();
    }
}


