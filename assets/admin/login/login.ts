// import des dépendances
import {ApiResult} from "./interfacesLogin";
import Router from "../../shared/libs/routing/fos.interface";
const routing: Router = require('../../shared/libs/routing/routing');

// import du css
import './login.scss';

class Login {

  public constructor() {
    this.login();
  }

  public login() {
    const form: HTMLFormElement = document.forms['form-login'];
    const subMessage: HTMLElement = document.getElementById('sub-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data: FormData = new FormData(form);

      let mail: any = null;
      let password: any = null;

      if (data.get('mail') && data.get('password')) {
        mail = data.get('mail');
        password = data.get('password');
      }

      const req: Promise<ApiResult> = this._formLogin(mail, password);

      req.then((result: ApiResult) => {
        if (result.status) {

          if (result.message == 'It\'s OK') {
            location.href = '/admin/dashboard';
          }
        } else {

          if (result.message == 'Erreur') {
            alert('test');
            subMessage.innerHTML = 'Identifiant ou mot de passe incorrect';
          }
        }
      });
    });
  }

  private async _formLogin(mail: string, password: string): Promise<ApiResult> {
    try {

      const response: Response = await fetch(routing.generate('admin_api_login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ mail: mail, password: password})
      });

      return response.json();

    } catch (exception) {

    }
  }
}

new Login();