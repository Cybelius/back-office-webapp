package com.backoffice.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Created by Geoffrey on 26.06.2018
 */
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    /**
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    /**
     * start the app
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
