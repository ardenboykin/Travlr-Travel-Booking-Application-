import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit, OnDestroy {
  trips: Trip[] = [];
  message: string = '';
  isLoggedIn: boolean = false;
  private authSub!: Subscription;

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private authenticationService: AuthenticationService
  ) {}

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = [...value];
          this.message = 'There are ' + this.trips.length + ' trips available.';
          this.cd.detectChanges();
        },
        error: (error: any) => {
          this.message = 'Error retrieving trips: ' + error;
          this.cd.detectChanges();
        }
      });
  }

  ngOnInit(): void {
    this.getStuff();
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.authSub = this.authenticationService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}
