import EmberRouter from '@ember/routing/router';
import config from 'bdtest/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('teams', function () {
    this.route('new');
    this.route('edit', { path: '/:team_id/edit' });
    this.route('show', { path: '/:team_id/show' });
    this.route('new-member', { path: '/:team_id/new-member' });
    this.route('edit-member', { path: '/:team_id/edit-member/:member_id' });
  });
});
