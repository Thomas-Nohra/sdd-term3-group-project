import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  users=[];
  //valid: any;
  constructor() {
      /* ====LOCALSTORAGE========
    Local storage stores data as key-value pairs, and the values are stored as "strings". 
    So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
    */
    if (localStorage.getItem("users") == null ) {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

  } //end constructor


  getUsers() {
    let users = JSON.parse(localStorage.getItem('users'));
    return users;
  }

  // this FUNCTION accepts 'one' parameter 'user'
  // and pushes this parameter into the peole array
  addUser(user): void {
    let users = JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }


  editUser(user, id): void {
    let users = JSON.parse(localStorage.getItem('users'));
    users[id] = user;
    localStorage.setItem('users', JSON.stringify(users));
  }

  deleteUser(id): void {
    let users = this.getUsers();
    users.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(users));
  }

  isUserValid(user): boolean {
    if (user.username === undefined || user.password_hash === undefined || user.email === undefined) {
      return false;
    }
    return true;
  } // end checkadd


}