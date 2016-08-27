Template.serverInfo.rendered =function serverInfoOnCreated() {
  var serverInfo;
  if (Meteor.isClient) {
     Meteor.call('getEntirePatchingList', function(error, results) {
        serverInfo = results.data;
        console.log(serverInfo);
        Session.set('targetServer', serverInfo);
     });

  }

};

if (Meteor.isClient) {
  Template.serverInfo.helpers({
      server_list: function() {
        return Session.get('targetServer');
      }
  });

}
