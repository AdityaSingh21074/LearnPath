package com.learnpath.LearnPath.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContentController {
    
    @GetMapping("/req/login")
    public String login() {
        return "login";
    }
    @GetMapping("/req/signup")
    public String signup() {
        return "signup";
    }
    @GetMapping("/index")
    public String home() {
        return "index"; 
    }
    @GetMapping("/courses")
    public String courses() {
        return "courses"; 
    }

    @GetMapping("/videos")
    public String videos() {
        return "videos"; 
    }
    
}
