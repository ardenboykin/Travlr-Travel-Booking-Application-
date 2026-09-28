import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  private authSub!: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.authSub = this.authenticationService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  public onLogout(): void {
    this.authenticationService.logout();
  }
}
