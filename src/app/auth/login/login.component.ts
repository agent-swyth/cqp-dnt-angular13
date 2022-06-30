import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from 'src/app/_interfaces/credentials';
import { IToken } from 'src/app/_interfaces/token';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: ICredentials = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  // Au clic du bouton "Connexion"
  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      data => {
        this.tokenService.saveToken(data.access_token)
      },
      err => console.log(err)
    )
  }
}
