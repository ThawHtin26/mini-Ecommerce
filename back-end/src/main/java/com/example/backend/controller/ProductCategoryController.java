package com.example.backend.controller;

import com.example.backend.entity.ProductCategory;
import com.example.backend.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/productcategories")
public class ProductCategoryController {

    ProductCategoryService productCategoryService;

    @Autowired
    public ProductCategoryController(ProductCategoryService productCategoryService)
    {
        this.productCategoryService = productCategoryService;
    }

    @GetMapping()
    public ResponseEntity<List<ProductCategory>> getProductCategories()
    {
        return new ResponseEntity<>(productCategoryService.getProductCategories(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductCategory> getProductCategory(@PathVariable("id")Long id)
    {
        return  new ResponseEntity<>(productCategoryService.getProductCategory(id),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ProductCategory> createProductCategory(@RequestBody ProductCategory productCategory)
    {
        return  new ResponseEntity<>(productCategoryService.createProductCategory(productCategory),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductCategory> updateProductCategory(@RequestBody ProductCategory productCategory,@PathVariable("id") Long id)
    {
        return new ResponseEntity<>(productCategoryService.updateProductCategory(productCategory,id),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProductCategory(@PathVariable("id")Long id)
    {
        productCategoryService.deleteProductCategory(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
