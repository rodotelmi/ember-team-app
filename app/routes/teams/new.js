import Route from '@ember/routing/route';

export default class TeamsNewRoute extends Route {
  model() {
    // Here you're creating a new team record ready to be saved
    return this.store.createRecord('team');
  }
}
