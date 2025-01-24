import RESTAdapter from '@ember-data/adapter/rest';
import ENV from '../config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.host;
  namespace = 'api'; // Adjust if your API has a namespace

  // future improvemen for retrieving teams include with members ?
  // urlForFindRecord(id, modelName, snapshot) {
  //   const baseUrl = super.urlForFindRecord(id, modelName, snapshot);

  //   if (modelName == 'team') {
  //     const filter = encodeURIComponent(JSON.stringify({ include: 'members' }));
  //     return `${baseUrl}?filter=${filter}`;
  //   } else {
  //     return baseUrl;
  //   }
  // }

  updateRecord(store, type, snapshot) {
    const data = {};
    const serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    const id = snapshot.id;
    const url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PATCH', { data }); // Use PATCH for updates
  }


  headers() {
    return {
      Accept: 'application/json',
    };
  }
}
