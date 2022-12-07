package com.example.backend.service.impl;

import com.example.backend.entity.ProductCategory;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.repository.ProductCategoryRepository;
import com.example.backend.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {

    ProductCategoryRepository productCategoryRepository;

    @Autowired
    public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository)
    {
        this.productCategoryRepository = productCategoryRepository;
    }

    @Override
    public ProductCategory createProductCategory(ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }

    @Override
    public ProductCategory getProductCategory(Long id) {
        ProductCategory productCategory = productCategoryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("There is no such proudct category with id :"+id));
        return productCategory;
    }

    @Override
    public List<ProductCategory> getProductCategories() {
        return productCategoryRepository.findAll();
    }

    @Override
    public ProductCategory updateProductCategory(ProductCategory productCategory, Long id) {
        ProductCategory _productCategory = productCategoryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("There is no such proudct category with id :"+id));
        _productCategory.setCategoryName(productCategory.getCategoryName());
        productCategoryRepository.save(_productCategory);
        return _productCategory;
    }

    @Override
    public ProductCategory deleteProductCategory(Long id) {
        ProductCategory productCategory = productCategoryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("There is no such proudct category with id :"+id));
        productCategoryRepository.delete(productCategory);
        return productCategory;
    }
}
