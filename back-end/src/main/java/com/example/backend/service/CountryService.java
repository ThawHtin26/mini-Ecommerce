package com.example.backend.service;

import com.example.backend.entity.Country;

import java.util.List;

public interface CountryService {

    List<Country>getCountries();
    Country getCountry(Integer id);

}
