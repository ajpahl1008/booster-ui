import { Meteor } from 'meteor/meteor';
var URL_PREFIX;
var modeAnnouncement;

Meteor.startup(() => {
     if (process.env.MODE == "DEV") {
         URL_PREFIX="http://localhost:9080";
         modeAnnouncement = 'Starting Meteor App - Booster - ' + process.env.MODE;
     } else if (process.env.MODE == "") {
         URL_PREFIX="https://booster.pahlsoft.com:9443";
         modeAnnouncement = 'Starting Meteor App - Booster - PROD';
     } else {
         URL_PREFIX="https://booster.pahlsoft.com:9443";
         modeAnnouncement = 'Starting Meteor App - Booster - PROD';
     }
         console.log(modeAnnouncement);
});


Meteor.methods({
          getEntirePatchingList: function() {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/booster/retrieve/servers/all');
          },
          getEntirePatchingListByOwner: function(owner) {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/booster/retrieve/owners/' + owner);
          },
          searchServerByName: function(serverName) {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/booster/retrieve/servers/' + serverName);
          },
          getOwnerList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + 'booster-services/booster/retrieve/owners/all')
          },
          getUaidList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + 'booster-services/booster/retrieve/uaids/all')
          },
          getPatchList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + 'booster-services/booster/retrieve/patches/all')
          }
  });
