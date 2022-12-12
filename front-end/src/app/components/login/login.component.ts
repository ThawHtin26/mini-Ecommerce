import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from "@okta/okta-signin-widget";
import myAppConfig from '../../config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSiginin:any;

  constructor(@Inject(OKTA_AUTH)private oktaAuth:OktaAuth) {
    this.oktaSiginin = new OktaSignIn({
      logo:'assets/images/logo.png',
      baseUrl:myAppConfig.odic.issuer.split('/oauth2')[0],
      clientId:myAppConfig.odic.clientId,
      redirectUri:myAppConfig.odic.redirectUri,
      authParams:{
        pkce:true,
        issuer:myAppConfig.odic.issuer,
        scopes:myAppConfig.odic.scopes
      }
    });
  }

  ngOnInit(): void {
    this.oktaSiginin.remove();

    this.oktaSiginin.renderEl(
      {
        el:'#okta-sign-in-widget'
      },
      (response:any)=>{
        if(response.status === 'SUCCESS'){
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error:any)=>{
        throw error;
      }
    )
  }

}
