package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.payload.ProductPage;
import com.example.backend.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@RestController
@RequestMapping("/api/productcategories")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService)
    {
        this.productService = productService;
    }

    @GetMapping("/{productcategoryId}/products")
    public ResponseEntity<ProductPage> getProducts(
            @PathVariable("productcategoryId") Long id,
            @RequestParam(value = "pageNo",defaultValue = "0",required = false)int pageNo,
            @RequestParam(value = "pageSize",defaultValue = "10",required = false)int pageSize){
        Pageable pageable = PageRequest.of(pageNo,pageSize);
        Page<Product> products = productService.getProducts(id,pageable);
        List<Product> listOfProducts = products.getContent();

        //Create ProductPage
        ProductPage productPage = new ProductPage();
        productPage.setPageSize(products.getSize());
        productPage.setTotalPages(products.getTotalPages());
        productPage.setTotalElements(products.getTotalElements());
        productPage.setProducts(listOfProducts);

        return new ResponseEntity(productPage, HttpStatus.OK);

    }

    @GetMapping("/{productcategoryId}/products/{productId}")
    public ResponseEntity<Product> getProduct(@PathVariable("productcategoryId")Long productCategoryId,
                                              @PathVariable("productId")Long productId)
    {
        Product product = productService.getProduct(productCategoryId,productId);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PostMapping("/{productcategoryId}/products")
    public ResponseEntity<Product> createProduct(@PathVariable("productcategoryId")Long id,@RequestBody Product product)
    {
        return new ResponseEntity<>(productService.createProduct(id,product),HttpStatus.CREATED);
    }

    @PutMapping("/{productcategoryId}/products/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable("productcategoryId")Long productCategoryId,
                                                 @PathVariable("productId")Long productId,@RequestBody Product product)
    {
        return new ResponseEntity<>(productService.updateProduct(product,productCategoryId,productId),HttpStatus.OK);
    }

    @DeleteMapping("/{productcategoryId}/products/{productId}")
    public ResponseEntity<Product> deleteProduct(@PathVariable("productcategoryId")Long productCategoryId,
                                                 @PathVariable("productId")Long productId){
        return new ResponseEntity<>(productService.deleteProduct(productCategoryId,productId),HttpStatus.NO_CONTENT);
    }

}
