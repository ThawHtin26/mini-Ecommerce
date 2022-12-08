package com.example.backend.service.impl;

import com.example.backend.entity.Product;
import com.example.backend.entity.ProductCategory;
import com.example.backend.exceptions.ApiException;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.repository.ProductCategoryRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    ProductRepository productRepository;
    ProductCategoryRepository productCategoryRepository;

    @Autowired
    ProductServiceImpl(ProductRepository productRepository,ProductCategoryRepository productCategoryRepository) {
        this.productRepository = productRepository;
        this.productCategoryRepository = productCategoryRepository;
    }

    @Override
    public Product createProduct(Long productCategoryid, Product product) {
        ProductCategory productCategory = productCategoryRepository.findById(productCategoryid)
                .orElseThrow(()->new ResourceNotFoundException("There is no such product category with id:"+productCategoryid));
        product.setCategory(productCategory);
        productRepository.save(product);
        return product;
    }

    @Override
    public Product getProduct(Long productCategoryId, Long productId) {
        ProductCategory productCategory = productCategoryRepository.findById(productCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("There is no such product category with id:" + productCategoryId));

        Product product = productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("There is no such product with id:"+productId));

        if(!product.getCategory().getId().equals(productCategory.getId())){
            throw new ApiException("product does not belong to the proudct category");
        }

        return product;

    }


    @Override
    public Page<Product> getProducts(Long productCategoryID, Pageable pageable) {
        return productRepository.findByCategoryId(productCategoryID,pageable);
    }

    @Override
    public Product updateProduct(Product product, Long productCategoryId, Long productId) {
        ProductCategory productCategory = productCategoryRepository.findById(productCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("There is no such product category with id:" + productCategoryId));

        Product _product = productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("There is no such product with id:"+productId));

        if(!_product.getCategory().getId().equals(productCategory.getId())){
            throw new ApiException("product does not belong to the proudct category");
        }
        _product.setName(product.getName());
        _product.setActive(product.isActive());
        _product.setLastUpdated(product.getLastUpdated());
        _product.setDateCreated(product.getDateCreated());
        _product.setSku(product.getSku());
        _product.setImageUrl(product.getImageUrl());
        _product.setUnitPrice(product.getUnitPrice());
        _product.setUnitsInStock(product.getUnitsInStock());
        _product.setDescription(product.getDescription());

        return productRepository.save(_product);
    }

    @Override
    public Product deleteProduct(Long productCategoryId, Long productId) {
        ProductCategory productCategory = productCategoryRepository.findById(productCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("There is no such product category with id:" + productCategoryId));

        Product product = productRepository.findById(productId)
                .orElseThrow(()->new ResourceNotFoundException("There is no such product with id:"+productId));

        if(!product.getCategory().getId().equals(productCategory.getId())){
            throw new ApiException("product does not belong to the proudct category");
        }

        productRepository.delete(product);
        return product;
    }

    @Override
    public Page<Product> findProductByName(String name, Pageable pageable) {
            return this.productRepository.findByNameContaining(name,pageable);
    }
}
