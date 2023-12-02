import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Map<string, string> = new Map();

  signup(username: string, password: string): boolean {
    // Check if the username already exists
    if (this.users.has(username)) {
      return false; // User already exists
    }

    // Store the username and password in the dictionary
    this.users.set(username, password);
    return true; // Signup successful
  }

  login(username: string, password: string): boolean {
    // Check if the username exists and the password is correct
    return this.users.has(username) && this.users.get(username) === password;
  }
}
