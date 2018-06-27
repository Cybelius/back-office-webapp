package com.backoffice.core.controller;

import com.backoffice.core.service.DeviceAPI;
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
public class DeviceController {

    /**
     */
    private static final Logger log = LoggerFactory.getLogger(DeviceController.class);

    /**
     */
    public DeviceController() {
        super();
    }

    /**
     * TODO: test with postman on localhost:9090 with tomcat deployment
     * @return a list of devices
     */
    @RequestMapping(value = "/devices", method = RequestMethod.GET)
    public List<DeviceAPI> getAllDevices() {
        final RestTemplate restTemplate = new RestTemplate();

        final ResponseEntity<List<DeviceAPI>> deviceResponse =
                restTemplate.exchange("http://localhost:8080/mobile-transaction/devices",
                        HttpMethod.GET, null, new ParameterizedTypeReference<List<DeviceAPI>>() {
                        }
                );

        final List<DeviceAPI> devices = deviceResponse.getBody();

        log.info(devices.toString());

        //return the result
        return devices;
    }
}
