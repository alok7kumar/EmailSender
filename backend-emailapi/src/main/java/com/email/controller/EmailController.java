package com.email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.email.model.EmailRequest;
import com.email.model.EmailResponse;
import com.email.service.EmailService;

@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailService emailService;

    @RequestMapping("/welcome")
    public String welcome() {
        return "hello this is my email api";
    }

    @RequestMapping(value = "/sendemail", method = RequestMethod.POST)
    public ResponseEntity<EmailResponse> sendEmail(@RequestBody EmailRequest request) {
        System.out.println(request);
        boolean result = emailService.sendEmail(request.getSubject(), request.getMessage(), request.getTo());

        if (result) {
            return ResponseEntity.ok(new EmailResponse("Email sent successfully. . . ."));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new EmailResponse("Email not sent . . . ."));
        }
    }
}
