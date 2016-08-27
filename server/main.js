import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('Starting Meteor App - Booster');
});

Meteor.methods({
          getEntirePatchingList: function() {
              this.unblock();
              return Meteor.http.call("GET", 'https://booster.pahlsoft.com:9443/booster-services/booster/retrieve/servers/all');
          },
          getEntirePatchingListByOwner: function(owner) {
              this.unblock();
              return Meteor.http.call("GET", 'https://booster.pahlsft.com:9443/booster-services/booster/retrieve/owners/' + owner);
          },
          searchServerByName: function(serverName) {
            this.unblock();
            return Meteor.http.call("GET", 'https://booster.pahlsoft.com:9443/booster-services/booster/retrieve/servers/' + serverName);
          }

  });
