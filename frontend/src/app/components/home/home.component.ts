import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
 import { RouterLink, RouterModule  } from '@angular/router';

@Component({
  selector: 'home',
  imports: [MatButtonModule,MatSnackBarModule,RouterModule, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack: MatSnackBar) {}

  btnClick() {
    this.snack.open("Hey! welcome to this app");
  }

}
