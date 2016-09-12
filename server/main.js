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
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/booster/getAll');
          },
          getEntirePatchingListByOwner: function(owner) {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/booster/getBoosterByOwners/' + owner);
          },
          getEntirePatchingListByServerName: function(serverName) {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/booster/getBoosterByServername/' + serverName);
          },
         getEntirePatchingListByUaid: function(uaId) {
              this.unblock();
              return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/booster/getBoosterByUaid/' + uaId);
          },
        getEntirePatchingListByPatchId: function(patchId) {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/booster/getBoosterByPatchId/' + patchId);
        },
          getOwnerList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/owners/getAll');
          },
          getUaidList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/uaids/getAll');
          },
          getPatchList: function() {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/patches/getAll');
          },
          getPatchById: function(patchId) {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/patches/getPatchById' + patchId);
          },
          getPatchByPlatform: function(platform) {
            this.unblock();
            return Meteor.http.call("GET", URL_PREFIX + '/booster-services/retrieve/patches/getPatchesByPlatform' + platform);
          },
          addPatch: function(patchInfo) {
              this.unblock();
              return Meteor.http.call("POST", URL_PREFIX + '/booster-services/update/patches/addPatch' , {
                  data: patchInfo,
                  headers: {
                      "content-type":"application/json",
                      "Accept":"application/json"
                  }
              });
           },

  });
