import { Meteor } from 'meteor/meteor';
var URL_PREFIX;

Meteor.startup(() => {
     if (process.env.MODE == "DEV") {
         URL_PREFIX="http://localhost:9080";
     } else {
         URL_PREFIX="https://booster.pahlsoft.com:9443";
     }
  console.log('Starting Meteor App - Booster - ' + process.env.MODE);
});

Meteor.methods({
          getEntirePatchingList: function() {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/booster/retrieve/servers/all');
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
