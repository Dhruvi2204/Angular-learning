import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
export interface UserCredentials {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // In production you might have an endpoint like '/api/users'
  // For demonstration, assume users.json is in the assets folder.
  private usersUrl = '/assets/users.json';

  constructor(private http: HttpClient) {}

  // Get the list of users from the JSON file
  getUsers(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(this.usersUrl);
  }

  // Simulate login by verifying credentials against users.json (and local storage mock-up)
  login(credentials: UserCredentials): Observable<boolean> {
    return this.getUsers().pipe(
      map((users) => {
        // Check if user exists in the JSON file
        if (
          users[credentials.username] &&
          users[credentials.username] === credentials.password
        ) {
          localStorage.setItem('loggedInUser', credentials.username);
          return true;
        }
        // Also check in our local storage "mock database" if available
        const localUsers = JSON.parse(localStorage.getItem('users') || '{}');
        if (
          localUsers[credentials.username] &&
          localUsers[credentials.username] === credentials.password
        ) {
          localStorage.setItem('loggedInUser', credentials.username);
          return true;
        }
        return false;
      }),
      catchError((err) => {
        console.error('Error fetching users', err);
        return of(false);
      })
    );
  }

  // Simulate registration. In a real application this would be a POST to your API.
  register(credentials: UserCredentials): Observable<boolean> {
    return this.getUsers().pipe(
      map((users) => {
        // Check if user exists in the static file
        if (users[credentials.username]) {
          return false; // User exists
        }
        // Check local storage for any previously registered users
        const localUsers = JSON.parse(localStorage.getItem('users') || '{}');
        if (localUsers[credentials.username]) {
          return false; // User exists
        }
        // "Register" the user by saving into local storage
        localUsers[credentials.username] = credentials.password;
        localStorage.setItem('users', JSON.stringify(localUsers));
        localStorage.setItem('loggedInUser', credentials.username);
        return true;
      }),
      catchError((err) => {
        console.error('Error during registration', err);
        return of(false);
      })
    );
  }

  // Check whether a user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  // Log out the user
  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
