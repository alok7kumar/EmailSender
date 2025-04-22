import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,      //It is necessary if using ngModel in forms
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule      //It is needed if using json as a pipe in form for showing data
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  // creating blank object
  data={
    'to':"",
    'subject':"",
    'message':""
  }

  flag=false; //it will be used to hide/show spinner , used above button


  constructor(private email:EmailService, private snak:MatSnackBar) {}  //yahan par EmailService ko inject kiya gaya hai

  doSubmitForm() {
    console.log("trying to submit form");
    console.log("DATA : ",this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message=='') {

      this.snak.open("fields can not be empty", "OK");
      return
    }

    this.flag=true; //show spinner

    this.email.sendEmail(this.data).subscribe({
      next : response=>{
        console.log('Email sent successfully!',response);
        
        // Success snackbar
        this.snak.open('Email sent successfully!', 'OK', { duration: 3000 });

        this.flag=false;  //hide spinner
      },
      error : err=>{
        console.log('Error occurred:',err);
        
        // Error snackbar
        this.snak.open('Failed to send email. Try again.', 'OK', { duration: 3000 });
        
        this.flag=false;  //hide spinner
      }
  })
    
  }

}
