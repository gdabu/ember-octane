import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;
  /**
   * @type {AuthService}
   */
  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(val) {
    console.log(val);
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} evt
   */
  @action
  onLoginFormSubmit(evt) {
    const { target } = evt;
    const val = target.querySelector('select').value;
    evt.preventDefault();

    this.auth.logInWithUserId(val);
  }

  /**
   *
   * @param {Event & {target: HTMLSelectElement}} evt
   */
  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }
}
