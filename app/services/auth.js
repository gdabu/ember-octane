import Router from '@ember/routing/router';
import Service from '@ember/service';
import { inject as service } from '@ember/service';
const AUTH_KEY = 'shlack-userid';
import { action } from '@ember/object';

export default class AuthService extends Service {
  /**
   * @type {Router}
   */
  @service router;

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }
  logInWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    window.localStorage.removeItem(AUTH_KEY);
    this.router.transitionTo('login');
  }
}
