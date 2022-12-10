package com.example.backend.service.impl;

import com.example.backend.entity.Country;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.repository.CountryRepository;
import com.example.backend.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private CountryRepository countryRepository;

    @Autowired
    public CountryServiceImpl(CountryRepository countryRepository)
    {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> getCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Country getCountry(Integer id) {
        Country country = countryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("There is no country with such id:"+id));
        return country;
    }
}
