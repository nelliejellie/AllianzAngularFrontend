import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.css']
})
export class LandingscreenComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/homescreen']);
  }
}
