import JSONSerializer from '@ember-data/serializer/json';

export default class MemberSerializer extends JSONSerializer {
  // need this for saving member model to backend match with loopback format
  serialize(snapshot, options) {
    // default serialized JSON
    let json = super.serialize(snapshot, options);

    // Adjust the payload structure to match the desired format
    json = {
      name: snapshot.attr('name'),
      role: snapshot.attr('role'),
      team_id: snapshot.belongsTo('team', { id: true }),
      id: snapshot.id,
    };

    return json;
  }
}
