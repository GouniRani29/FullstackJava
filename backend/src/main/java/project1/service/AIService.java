package project1.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${gemini.api.key}")
    private String apiKey;

    public String askGemini(String message) {

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="
                        + apiKey;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = Map.of(
                "contents",
                List.of(
                        Map.of(
                                "parts",
                                List.of(
                                        Map.of(
                                                "text",
                                                message
                                        )
                                )
                        )
                )
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        ResponseEntity<Map> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.POST,
                        entity,
                        Map.class
                );

        Map candidate =
                (Map) ((List<?>) response.getBody().get("candidates")).get(0);

        Map content =
                (Map) candidate.get("content");

        Map part =
                (Map) ((List<?>) content.get("parts")).get(0);

        return part.get("text").toString();
    }

}