import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('Starting Meteor App - Booster');
});

Meteor.methods({
          getEntirePatchingList: function() {
              this.unblock();
              return Meteor.http.call("GET", 'http://localhost:9080/booster-services/booster/retrieve/all');
          },
          getEntirePatchingListByOwner: function(owner) {
              this.unblock();
              return Meteor.http.call("GET", 'http://localhost:9080/booster-services/booster/retrieve/owners/' + owner);
          },
          searchServerByName: function(serverName) {
            this.unblock();
            return Meteor.http.call("GET", 'http://localhost:9080/booster-services/booster/retrieve/servers/' + serverName);
          }

  });
