import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: Profile = {
    username: 'Charlie P. Librando',
    email: 'Charlie@example.com',
    address: 'Valenzuela City, Metro Manila, Philippines',
    profilePicture: 'assets/profile.png',
  };

  getProfile(): Profile {
    return this.profile;
  }
}