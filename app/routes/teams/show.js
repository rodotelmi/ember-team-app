import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamsShowRoute extends Route {
  @service globalState;

  async model(params) {
    // Fetch the team with its members using the include filter
    // const team = await this.store.findRecord('team', params.team_id, {
    //   include: 'members',
    // });
    const teamId = params.team_id;
    const team = await this.store.findRecord('team', teamId);
    this.globalState.currentTeam = team;
    const members = await this.store.query('member', {
      filter: {
        where: { team_id: teamId }, // Filter members by teamId
      },
    });

    return {
      team,
      members,
    };
  }
}
