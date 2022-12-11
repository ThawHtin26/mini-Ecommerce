package com.example.backend.service;

import com.example.backend.payload.Purchase;
import com.example.backend.payload.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
