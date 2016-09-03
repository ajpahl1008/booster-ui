
Template.search.onRendered(function () {
    Session.set('server',true);
    Session.set('uaid',false);
    Session.set('owner',false);
});

Template.search.events({
    'change #server': function(e) {
        Session.set('server', true);
        Session.set('uaid', false);
        Session.set('owner', false);
    },
    'change #uaid' : function(e) {
        Session.set('server', false);
        Session.set('uaid', true);
        Session.set('owner', false);
    },
    'change #owner' : function(e) {
        Session.set('server', false);
        Session.set('uaid', false);
        Session.set('owner', true);
    },
    'keypress input.serverName': function (evt, template) {
        if (evt.which === 13) {
            console.log("Looking for " + template.find('.serverName').value);
        }
    },
    'keypress input.uaId': function (evt, template) {
        if (evt.which === 13) {
            console.log("Looking for " + template.find('.uaId').value);
        }
    },
    'keypress input.ownerId': function (evt, template) {
        if (evt.which === 13) {
            console.log("Looking for " + template.find('.ownerId').value);
        }
    },


});

if (Meteor.isClient) {
    Template.search.helpers({

        server: function() {
            return Session.get('server');
        },
        uaid: function() {
            return Session.get('uaid');
        },
        owner: function() {
            return Session.get('owner');
        },
        server_list: function(searchString) {
            if (Session.get('server')) {
                Meteor.call('getEntirePatchingListbyByServerName', function(error, results) {
                    serverInfo = results.data;
                    console.log(serverInfo);
                    Session.set('retrievedServers', results.data);
                });
            } else if (Session.get('uaid')) {
                Meteor.call('getEntirePatchingListbyByUaid', function(error, results) {
                    serverInfo = results.data;
                    console.log(serverInfo);
                    Session.set('retrievedServers', results.data);
                });
            } else if (Session.get('owner')) {
                Meteor.call('getEntirePatchingListByOwner', function(error, results) {
                    serverInfo = results.data;
                    console.log(serverInfo);
                    Session.set('retrievedServers', results.data);
                });
            }
        }
    });

}
