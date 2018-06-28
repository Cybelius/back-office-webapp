package com.backoffice.core.controller;

import com.backoffice.core.service.DeviceAPI;
import com.backoffice.core.service.EmployeeAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
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
    @RequestMapping(value = "/employees", method =  {
            RequestMethod.GET
    })
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

    /**
     * @return a list of devices
     */
    @RequestMapping(value = "/employees/employee/{id}", method = {
            RequestMethod.PUT
    }, produces = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity<EmployeeAPI> updateEmployee(@PathVariable final Long id,
          @RequestBody final EmployeeAPI employee) {
        log.debug("id: {}, employee: {}", id, employee);

        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        final HttpEntity<EmployeeAPI> entity = new HttpEntity<>(employee, headers);

        final ResponseEntity<EmployeeAPI> response =
                restTemplate.exchange("http://localhost:8080/back-office/employees/employee/" + id,
                        HttpMethod.PUT, entity, EmployeeAPI.class);

        log.info(response.toString());

        //return the result
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }
}
