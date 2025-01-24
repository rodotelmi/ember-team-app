import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GlobalStateService extends Service {
  @tracked currentTeam = null;

  getTeam() {
    return this.currentTeam;
  }

  clearTeam() {
    this.currentTeam = null;
  }
}
