import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userData = string[];
  constructor(private authServ: AuthServiceService) { }

  loginPost(){
    // this.authServ = this.userData;
  }

  ngOnInit(): void {
  }

}
