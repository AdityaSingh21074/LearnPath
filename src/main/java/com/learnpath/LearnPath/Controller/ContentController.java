package com.learnpath.LearnPath.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


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
    @GetMapping("/course")
    public String course() {
        return "course"; 
    }

    @GetMapping("/about")
    public String about() {
        return "about"; 
    }
    @GetMapping("/detail")
    public String detail() {
        return "detail"; 
    }
    @GetMapping("/feature")
    public String feature() {
        return "feature"; 
    }
    @GetMapping("/notes")
    public String notes() {
        return "notes"; 
    }

    @GetMapping("/roadmaps")
    public String roadmaps() {
        return "roadmaps"; 
    }
    
}
