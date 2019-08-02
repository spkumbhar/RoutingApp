import { Component, OnInit, RootRenderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(name: string, pass: string) {
    // tslint:disable-next-line: triple-equals
    if ( name == 'sonali' && pass == 'password') {
    this.router.navigate(['dash']);
    } else {
      this.router.navigate(['error']);
    }
  }
}
