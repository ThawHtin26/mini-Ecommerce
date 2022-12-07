package com.example.backend.service;

import com.example.backend.entity.ProductCategory;

import java.util.List;

public interface ProductCategoryService {

    ProductCategory createProductCategory(ProductCategory productCategory);
    ProductCategory getProductCategory(Long id);
    List<ProductCategory> getProductCategories();
    ProductCategory updateProductCategory(ProductCategory productCategory,Long id);
    ProductCategory deleteProductCategory(Long id);

}
