package project1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.dto.ChatRequest;
import project1.dto.ChatResponse;
import project1.service.AIService;

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "http://localhost:5173")
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {

        String reply = aiService.askGemini(request.getMessage());

        return new ChatResponse(reply);
    }

}