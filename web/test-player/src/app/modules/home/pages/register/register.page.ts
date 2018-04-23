import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User, UserType} from "../../../../shared/models/user";
import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterPage implements OnInit {

  model: UserType = new User();
  errorMessage: string;

  constructor(private api: RestAPIService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    this.api.register(this.model.username, this.model.password)
        .subscribe(json=> {
          if(json.success) {
            this.router.navigate(['/home/login', {'message': "Registration was successful"}]);
          } else {
            this.errorMessage = json.message;
          }

        });
  }

}
