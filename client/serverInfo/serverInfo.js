Template.serverInfo.rendered =function serverInfoOnCreated() {
  var serverInfo;
  if (Meteor.isClient) {
     Meteor.call('getEntirePatchingList', function(error, results) {
        serverInfo = results.data;
        console.log(serverInfo);
        Session.set('retrievedServers', serverInfo);
     });

  }

};

if (Meteor.isClient) {
  Template.serverInfo.helpers({
      server_list: function() {
        return Session.get('retrievedServers');
      },

  });

}

Template.serverInfo.events({
   'click #rebootServer': function(){
       sAlert.success("Rebooting Server");
   } ,
    'click #patchServer': function() {
        sAlert.success("Patching Server");
    }

});