if (Meteor.isClient) {
  Template.serverInfo.helpers({
      server_list: function() {
        return Session.get('targetServer');
      }
  });

}
