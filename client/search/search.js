if (Meteor.isClient) {
var serverInfo;

    Template.search.onRendered(function () {
            clearDeck();
    });

    Template.search.events({
    'change #server': function(e) {
        Session.set('server', true);
        Session.set('uaid', false);
        Session.set('owner', false);
        Session.set('searchData','');
        Session.set('retrievedServers',null);
    },
    'change #uaid' : function(e) {
        Session.set('server', false);
        Session.set('uaid', true);
        Session.set('owner', false);
        Session.set('searchData','');
        Session.set('retrievedServers',null);
    },
    'change #owner' : function(e) {
        Session.set('server', false);
        Session.set('uaid', false);
        Session.set('owner', true);
        Session.set('searchData','');
        Session.set('retrievedServers',null);
    },
        'click #resetSearch' : function(e) {
            clearDeck();
    },
    'keypress input.serverName': function (evt, template) {
        if (evt.which === 13) {
            Session.set('searchData', template.find('.serverName').value);
            Meteor.call('getEntirePatchingListByServerName', Session.get('searchData'), function(error, results) {
                Session.set('retrievedServers', results.data);
            });
        }
    },
    'keypress input.uaId': function (evt, template) {
        if (evt.which === 13) {
            Session.set('searchData', template.find('.uaId').value);
            Meteor.call('getEntirePatchingListByUaid', Session.get('searchData'), function(error, results) {
                Session.set('retrievedServers', results.data);
            });
        }
    },
    'keypress input.ownerId': function (evt, template) {
        if (evt.which === 13) {
            Session.set('searchData', template.find('.ownerId').value);
            Meteor.call('getEntirePatchingListByOwner', Session.get('searchData'), function(error, results) {
               Session.set('retrievedServers', results.data);
            });
        }
    },


   });

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

    });

    Template.searchResult.helpers({
        search_results: function() {
            if (Session.get('retrievedServers') != null) {
                return Session.get('retrievedServers');
            }
        },
    });


}

clearDeck = function() {
    Session.set('server',false);
    Session.set('uaid',false);
    Session.set('owner',false);
    Session.set('searchData','');
    Session.set('retrievedServers', null);
}