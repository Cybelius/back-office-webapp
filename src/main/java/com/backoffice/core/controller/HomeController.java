package com.backoffice.core.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Geoffrey on 26.06.2018
 */
@Controller
public class HomeController {

    /**
     */
    @RequestMapping(value = {
            "/"
    }, method = {
            RequestMethod.GET
    })
    public void index(HttpServletResponse response) throws IOException {
        response.sendRedirect("index.html");
    }

}
