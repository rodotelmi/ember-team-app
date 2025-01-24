import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamFormComponent extends Component {
  @service router;

  @action
  saveTeam(team) {
    team.save().then(() => {
      this.router.transitionTo('teams.index');
    });
  }

  @action
  cancel() {
    if (this.args.team) {
      // Undo changes if team is passed as an argument
      this.args.team.rollbackAttributes();
    }
    this.router.transitionTo('teams.index');
  }
}
