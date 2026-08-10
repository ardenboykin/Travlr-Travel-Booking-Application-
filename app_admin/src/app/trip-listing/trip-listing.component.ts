import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = [...value];
          this.message = 'There are ' + this.trips.length + ' trips available.';
          console.log(this.message);
          console.log(this.trips);
          this.cd.detectChanges();
        },
        error: (error: any) => {
          console.log('Error retrieving trips:', error);
          this.message = 'Error retrieving trips: ' + error;
          this.cd.detectChanges();
        }
      });
  }

  ngOnInit(): void {
    this.getStuff();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}
