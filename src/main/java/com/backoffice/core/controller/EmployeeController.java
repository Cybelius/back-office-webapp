package com.backoffice.core.controller;

import com.backoffice.core.service.DeviceAPI;
import com.backoffice.core.service.EmployeeAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by Geoffrey on 26.06.2018
 */
@RestController
public class EmployeeController {

    /**
     */
    private static final Logger log = LoggerFactory.getLogger(EmployeeController.class);

    /**
     */
    public EmployeeController() {
        super();
    }

    /**
     * @return a list of devices
     */
    @RequestMapping(value = "/employees", method = RequestMethod.GET)
    public List<EmployeeAPI> getAllEmployees() {
        final RestTemplate restTemplate = new RestTemplate();

        final ResponseEntity<List<EmployeeAPI>> employeesResponse =
                restTemplate.exchange("http://localhost:8080/back-office/employees",
                        HttpMethod.GET, null, new ParameterizedTypeReference<List<EmployeeAPI>>() {
                        }
                );

        final List<EmployeeAPI> employees = employeesResponse.getBody();

        log.info(employees.toString());

        //return the result
        return employees;
    }
}
