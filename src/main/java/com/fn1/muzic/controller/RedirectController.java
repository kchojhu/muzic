package com.fn1.muzic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RedirectController {

    @RequestMapping("/filebrowser")
    public String getHomePage() {
        return "/WEB-INF/filebrowser/Browser.jsp";
    }
	
}
