package com.backoffice.core.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Geoffrey on 26.06.2018
 */
@RestController
public class HomeController {

    /**
     */
    private static final Logger log = LoggerFactory.getLogger(HomeController.class);

    /**
     */
    public HomeController() {
        super();
    }

    /**
     */
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
