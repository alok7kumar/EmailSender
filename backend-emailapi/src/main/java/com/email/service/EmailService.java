package com.email.service;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Value("${mail.smtp.username}")
    private String username;

    @Value("${mail.smtp.password}")
    private String password;

    @Value("${mail.smtp.from}")
    private String from;

    public boolean sendEmail(String subject, String message, String to) {

        boolean flag = false;

        Properties properties = new Properties();
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.host", "smtp.gmail.com");

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message1 = new MimeMessage(session);
            message1.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message1.setFrom(new InternetAddress(from));
            message1.setSubject(subject);
            message1.setText(message);

            Transport.send(message1);
            System.out.println("Sent success. . . . . . . .");

            flag = true;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return flag;
    }
}
