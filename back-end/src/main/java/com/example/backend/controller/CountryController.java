package com.example.backend.controller;

import com.example.backend.entity.Country;
import com.example.backend.service.CountryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/countries")
public class CountryController {

    private CountryService countryService;

    public CountryController(CountryService countryService)
    {
        this.countryService = countryService;
    }

    @GetMapping()
    public ResponseEntity<List<Country>> getCountries()
    {
        return new ResponseEntity<>(countryService.getCountries(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Country> getCountry(@PathVariable("id")Integer id)
    {
        return  new ResponseEntity<>(countryService.getCountry(id),HttpStatus.OK);
    }


}
