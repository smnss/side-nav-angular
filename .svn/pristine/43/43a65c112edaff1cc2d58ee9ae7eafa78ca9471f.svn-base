import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/utilities/http/http.service';
import { FeatureService } from '../feature-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public loginParameter: object;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  domain = new FormControl('', [Validators.required]);

  constructor(private featureService: FeatureService, private router: Router) {}

  loginSubmit() {
    this.loginParameter = {
      name: this.username.value,
      pwd: this.password.value,
      org: this.domain.value
    };

    this.featureService.getLogin(this.loginParameter).subscribe(data => {
      if (data.status === 200) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {}
}
