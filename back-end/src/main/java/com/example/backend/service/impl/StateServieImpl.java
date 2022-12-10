package com.example.backend.service.impl;

import com.example.backend.entity.State;
import com.example.backend.repository.StateRepository;
import com.example.backend.service.StateService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateServieImpl implements StateService {

    private StateRepository stateRepository;

    public StateServieImpl(StateRepository stateRepository)
    {
        this.stateRepository = stateRepository;
    }


    @Override
    public List<State> getStates() {
        return stateRepository.findAll();
    }

    @Override
    public List<State> findByCountryCode(String code) {
        return findByCountryCode(code);
    }
}
