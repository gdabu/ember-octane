import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';
export default class TeamsRoute extends Route {
  /**
   *
   * @param {*} AuthService
   */
  @service auth;
  async beforeModel(transition) {
    await super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }
}
