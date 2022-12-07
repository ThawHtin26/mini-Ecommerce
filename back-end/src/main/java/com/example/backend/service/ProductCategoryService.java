package com.example.backend.service;

import com.example.backend.entity.ProductCategory;

import java.util.Optional;

public interface ProductCategoryService {

    ProductCategory createProductCategory(ProductCategory productCategory);
    ProductCategory getProductCategory(Long id);
    Optional<ProductCategory> getProductCategories();
    ProductCategory updateProductCategory(ProductCategory productCategory,Long id);
    ProductCategory deleteProductCategory(Long id);

}
