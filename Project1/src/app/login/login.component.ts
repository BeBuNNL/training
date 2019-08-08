import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

const control = new FormControl('', { updateOn: 'blur' });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fLogin: FormGroup;
  emailInp: FormControl;
  pwdInp: FormControl;
  cookieValue = 'UNKNOWN';

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.emailInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')// after @ 3 character => alway true
    ]));
    this.pwdInp = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]));
    this.fLogin = new FormGroup({
      email: this.emailInp,
      password: this.pwdInp
    });
  }

  onSubmit(){
    console.log(this.emailInp.value, this.pwdInp.value);
    this.cookieService.set('TestEmail', this.emailInp.value);
    this.cookieService.set('TestPwd', this.pwdInp.value);
    let test = this.cookieService.get('TestEmail');
    console.log('test: ', test);
  }
}
