package com.backoffice.core.controller;

import com.backoffice.core.service.LoginService;
import com.backoffice.core.service.model.EmployeeIn;
import com.backoffice.core.service.model.EmployeeOut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Geoffrey on 02.07.2018
 */
@RestController
public class LoginController {

    /**
     */
    private static final Logger log = LoggerFactory.getLogger(LoginController.class);

    /**
     */
    @Autowired
    private LoginService loginService;

    /**
     */
    public LoginController() {
        super();
    }

    /**
     */
    @RequestMapping(value = "/login", method = {
            RequestMethod.POST
    }, consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity<Boolean> login(@RequestBody @NonNull final EmployeeIn employee) {
        log.debug("employee: {}", employee);

        final EmployeeOut out = this.loginService.login(employee);

        if (out == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        final HttpEntity<EmployeeOut> entity = new HttpEntity<>(out, headers);

        final ResponseEntity<Boolean> response =
                restTemplate.exchange("http://localhost:8080/back-office/employees/employee/login",
                        HttpMethod.POST, entity, Boolean.class);

        final boolean isAdmin = response.getBody();

        return new ResponseEntity<>(isAdmin, HttpStatus.OK);
    }
}
