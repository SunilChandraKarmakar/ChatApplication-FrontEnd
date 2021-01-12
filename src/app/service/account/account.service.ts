import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountCreateViewModel } from 'src/app/models/account/account_create_view_model';
import { AccountViewModel } from 'src/app/models/account/account_view_model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient: HttpClient) { }
  
  baseUrl: string = "https://localhost:44396/api";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  create(registerFormData: AccountCreateViewModel): Observable<AccountViewModel> {
    const registerUrl = this.baseUrl + "/account";
    return this._httpClient.post<AccountViewModel>(registerUrl, registerFormData, this.httpOptions);
  }
}
