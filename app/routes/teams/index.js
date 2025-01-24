import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamsIndexRoute extends Route {
  @service router;
  @service globalState;

  async model() {
    this.globalState.clearTeam();
    return this.store.findAll('team');
  }

  @action
  async deleteTeam(team) {
    if (confirm('Are you sure you want to delete this team?')) {
      try {
        await team.destroyRecord();
        this.router.transitionTo('index');
      } catch (error) {
        console.error('Error deleting team:', error);
      }
    }
  }
}
