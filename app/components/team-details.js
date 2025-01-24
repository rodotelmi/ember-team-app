import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamDetailsComponent extends Component {
  @service router;

  @action
  async deleteMember(member) {
    if (confirm('Are you sure you want to delete this member?')) {
      try {
        const teamId = this.args.team.id;
        await member.destroyRecord();
        this.router.transitionTo('teams.show', teamId);
      } catch (error) {
        console.error('Error deleting team:', error);
      }
    }
  }
}
