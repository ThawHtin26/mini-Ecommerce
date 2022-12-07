package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.entity.ProductCategory;

import java.util.List;

public interface ProductService {

    Product createProduct(Long productCategoryid,Product product);
    Product getProduct(Long productCategoryID,Long ProductId);
    List<Product> getProducts(Long productCategoryID);
    Product updateProduct(Product product,Long productCategoryid,Long productId);
    Product deleteProduct(Long productCategoryid,Long productId);

}
