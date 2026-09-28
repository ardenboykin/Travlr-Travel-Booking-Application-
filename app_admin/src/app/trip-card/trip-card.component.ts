import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit, OnDestroy {

  @Input('trip') trip: any;
  isLoggedIn: boolean = false;
  private authSub!: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.authSub = this.authenticationService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}
