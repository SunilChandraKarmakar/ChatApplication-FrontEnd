import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountViewModel } from 'src/app/models/account/account_view_model';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  @Output() onRegistredAccount = new EventEmitter<AccountViewModel>();

  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      "firstName": new FormControl(null, Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email])
    });
  }  

  onRegister() {
    if(this.registrationForm.valid) {
      this._accountService.create(this.registrationForm.value)
      .subscribe(registredAccount => this.onRegistredAccount.emit(registredAccount));
    }
  }
}
