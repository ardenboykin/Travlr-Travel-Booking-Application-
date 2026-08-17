import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
  }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password ||
        !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('#');
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    this.tripDataService.login(newUser, this.credentials.password)
      .subscribe({
        next: (value: any) => {
          if(value) {
            this.authenticationService.saveToken(value.token);
            this.router.navigate(['']);
          }
        },
        error: (error: any) => {
          this.formError = 'Login failed, please try again';
          console.log('Error: ' + error);
        }
      });
  }
}
