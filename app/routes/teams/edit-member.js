import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamsEditMemberRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('member', params.member_id);
  }
}
