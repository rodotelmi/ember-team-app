import Route from '@ember/routing/route';

export default class TeamsNewMemberRoute extends Route {
  async model(params) {
    // Here you're creating a new team record ready to be saved
    // const team = await this.store.findRecord('team', params.team_id);
    return this.store.createRecord('member');
  }
}
