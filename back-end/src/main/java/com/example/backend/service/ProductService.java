package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.entity.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {

    Product createProduct(Long productCategoryid,Product product);
    Product getProduct(Long productCategoryID,Long ProductId);
    Page<Product> getProducts(Long productCategoryID, Pageable pageable);
    Product updateProduct(Product product,Long productCategoryid,Long productId);
    Product deleteProduct(Long productCategoryid,Long productId);

}
