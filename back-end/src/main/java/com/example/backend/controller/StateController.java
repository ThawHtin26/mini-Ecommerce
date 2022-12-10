package com.example.backend.controller;

import com.example.backend.entity.State;
import com.example.backend.service.StateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/states")
public class StateController {

    private StateService stateService;

    public StateController(StateService stateService)
    {
        this.stateService = stateService;
    }

    @GetMapping
    public ResponseEntity<List<State>> getStates()
    {
        return new ResponseEntity<>(this.stateService.getStates(), HttpStatus.OK);
    }

    @GetMapping("/search/findByCountryCodec")
    public ResponseEntity<List<State>> getByCountryCode(@RequestParam("code")String code)
    {
        return new ResponseEntity<>(this.stateService.findByCountryCode(code),HttpStatus.OK);
    }



}
