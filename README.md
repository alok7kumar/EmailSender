# 📧 Email Sender Fullstack Application

This is a **fullstack email-sending application** built with **Angular (Frontend)** and **Spring Boot (Backend)**. It allows users to send emails with a subject and message to any recipient. The application supports RESTful communication and is structured for deployment-ready development.

---

## 🛠️ Tech Stack

| Layer      | Technology     |
|------------|----------------|
| Frontend   | Angular (TypeScript, HTML, CSS) |
| Backend    | Spring Boot (Java) |
| Protocol   | REST API       |
| Email API  | JavaMailSender |
| Build Tool | Maven          |

---

## 📁 Project Structure

    
```
    EmailSender/
    ├── backend-emailapi/         # Spring Boot Backend
    │   ├── src/
    │   ├── pom.xml
    │   └── application.properties
    │
    └── frontend/                 # Angular Frontend
        ├── src/
        ├── angular.json
        └── package.json
```
---

## 🚀 Getting Started

### 🖥 Backend Setup (Spring Boot)

1. Navigate to the backend directory:

   ```bash
   cd backend-emailapi

2. Configure your email credentials in src/main/resources/application.properties:
    #### 🔧 `application.properties`
    ```
    spring.mail.host=smtp.gmail.com
    spring.mail.username=your_email@gmail.com
    spring.mail.password=your_app_password        #use app password ,not real gmail password
    ```

4. Run the application:

    ```bash
    ./mvnw spring-boot:run

5. Backend will be live at: http://localhost:8080

---

## 🌐 Frontend Setup (Angular)

  1. Navigate to the frontend directory:
     ```
     cd frontend
  2. Install dependencies:
      ```bash
      npm install
  
  3. Run the Angular development server:
      ```bash
       ng serve
      ```
4. Open in browser: http://localhost:4200

---

## 🔁 How It Works
* User fills in the email form (To, Subject, Message) on the Angular frontend.

* Angular sends a POST request to Spring Boot backend at /sendemail.

* Spring Boot uses JavaMailSender to dispatch the email.

* Success or error message is shown to the user.

---

## 🎯 Sample API (Postman Testing)


  POST http://localhost:8080/sendemail
  
  
    {
    
    "to": "example@example.com",
  
    "subject": "Hello from Email Sender App",
    
    "message": "This is a test email sent from our fullstack project."
   
    }  
---
