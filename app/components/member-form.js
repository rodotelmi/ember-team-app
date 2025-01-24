import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MemberFormComponent extends Component {
  @service router;
  @service store;
  @service globalState;

  currentTeam = this.globalState.getTeam();

  // 
  get roles() {
    return ['Developer', 'Designer', 'Manager'].map((role) => {
      return {
        value: role.toLowerCase(),
        label: role,
      };
    });
  }

  memberRole = this.args.member.role || '';

  @action
  updateRole(event) {
    this.memberRole = event.target.value;
  }

  @action
  async saveMember(member) {
    member.set('role', this.memberRole);
    member.set('team', this.currentTeam);
    member.save().then(() => {
      this.router.transitionTo('teams.show', this.currentTeam.id);
    });
  }

  @action
  cancel() {
    if (this.args.member) {
      // reset member
      this.args.member.rollbackAttributes();
    }
    this.router.transitionTo('teams.show', this.currentTeam.id);
  }
}
