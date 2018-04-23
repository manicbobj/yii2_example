import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User, UserType} from "../../../../shared/models/user";
import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";
import {Router} from "@angular/router";
import {StorageService} from "../../../../shared/service/storage/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  model: UserType = new User();
  errorMessage: string;

  constructor(private api: RestAPIService,
              private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.login(this.model.username, this.model.password)
      .subscribe((json) => {

        if(json.success) {
          console.log(json);
          this.storage.setSession(json.data);
          this.router.navigate(['/home']);

        }
        else {
          this.errorMessage = json.message;
        }

      })
    }
}
