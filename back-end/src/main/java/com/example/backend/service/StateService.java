package com.example.backend.service;

import com.example.backend.entity.State;

import java.util.List;

public interface StateService {

    List<State> getStates();
    List<State> findByCountryCode(String code);

}
