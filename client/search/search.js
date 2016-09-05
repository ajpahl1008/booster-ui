if (Meteor.isClient) {
var serverInfo;

    Template.search.onRendered(function () {
            //clearDeck();
    });

    Template.search.events({
    'change #serverRadioButton': function(e) {
        Session.set('server', true);
        Session.set('uaid', false);
        Session.set('owner', false);
        Session.set('patch', false);
        Session.set('searchData','');
        Session.set('retrievedServers','');
    },
    'change #uaidRadioButton' : function(e) {
        Session.set('server', false);
        Session.set('uaid', true);
        Session.set('owner', false);
        Session.set('patch', false);
        Session.set('searchData','');
        Session.set('retrievedServers','');
    },
    'change #ownerRadioButton' : function(e) {
        Session.set('server', false);
        Session.set('uaid', false);
        Session.set('owner', true);
        Session.set('patch', false);
        Session.set('searchData','');
        Session.set('retrievedServers','');
    },
    'change #patchRadioButton' : function(e) {
        Session.set('server', false);
        Session.set('uaid', false);
        Session.set('owner', false);
        Session.set('patch', true);
        Session.set('searchData','');
        Session.set('retrievedServers','');
    },
    'click #resetSearch' : function(e, tmpl) {
        clearDeck(tmpl);
        Session.set('searchData','');
        Session.set('retrievedServers','');
      },
    'click #ownerSearchButton, click #serverSearchButton, click #uaidSearchButton, click #patchSearchButton' : function (e, tmpl) {
        if (e.target.id == "serverSearchButton") {
            searchServer(e, tmpl);
        } else if (e.target.id == "ownerSearchButton") {
            searchOwner(e,tmpl);
        } else if (e.target.id == "uaidSearchButton") {
            searchUaid(e,tmpl);
        } else if (e.target.id == "patchSearchButton") {
            searchPatch(e,tmpl);
        }

    },
    'keypress input.serverName': function (evt, template) {
        if (evt.which === 13) {
            searchServer(evt, template);
        }
    },
    'keypress input.uaId': function (evt, template) {
        if (evt.which === 13) {
           searchUaid(evt,template);
        }
    },
    'keypress input.ownerId': function (evt, template) {
        if (evt.which === 13) {
           searchOwner(evt,template);
        }
    },
        'keypress input.patchId': function (evt, template) {
            if (evt.which === 13) {
                searchPatch(evt,template);
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
        patch: function() {
            return Session.get('patch');
        },

    });

    Template.searchResult.helpers({
        search_results: function() {
            if (Session.get('retrievedServers') != '') {
                return Session.get('retrievedServers');
            }
        },
    });

}

clearDeck = function(tmpl) {

    if (Session.get('server')) {
        tmpl.find('.serverName').value = '';
    }

    if(Session.get('uaid')) {
        tmpl.find('input.uaId').value = '';
    }

    if (Session.get('owner')) {
        tmpl.find('.ownerId').value = '';
    }
    if (Session.get('patch')) {
        tmpl.find('.patchId').value = '';
    }

    Session.set('searchData','');
    Session.set('retrievedServers', '');
}

searchServer = function(e, tmpl) {
    Session.set('retrievedServers','');
    Session.set('searchData', tmpl.find('.serverName').value);
    if (Session.get('searchData') != '') {
        Meteor.call('getEntirePatchingListByServerName', Session.get('searchData'), function(error, results) {
            if (results.data != '') {
                Session.set('retrievedServers', results.data);
            } else {
                sAlert.info('No servers found')
            }
        });
    } else {
        sAlert.error('Invalid Input: Need search criteria - Server Name')
    }
}

searchUaid = function(e, tmpl) {
    Session.set('retrievedServers','');
    Session.set('searchData', tmpl.find('.uaId').value);
    if (Session.get('searchData') != '') {
        Meteor.call('getEntirePatchingListByUaid', Session.get('searchData'), function(error, results) {
            if (results.data != '') {
                Session.set('retrievedServers', results.data);
            } else {
                sAlert.info('No servers found')
            }
        });
    } else {
        sAlert.error('Invalid Input: Need search criteria - UAID')
    }
}

searchPatch = function(e,tmpl) {
    Session.set('retrievedServers','');
    Session.set('searchData', tmpl.find('.patchId').value);
    if (Session.get('searchData') != '') {
        Meteor.call('getEntirePatchingListByPatchId', Session.get('searchData'), function (error, results) {
            if (results.data != '') {
                Session.set('retrievedServers', results.data);
            } else {
                sAlert.info('No servers found')
            }
        });

    } else {
        sAlert.error('Invalid Input: Need search criteria - Patch ID' );
    }
}

searchOwner = function(e,tmpl) {
    Session.set('retrievedServers','');
    Session.set('searchData', tmpl.find('.ownerId').value);
    if (Session.get('searchData') != '') {
        Meteor.call('getEntirePatchingListByOwner', Session.get('searchData'), function (error, results) {
            if (results.data != '') {
                Session.set('retrievedServers', results.data);
            } else {
                sAlert.info('No servers found')
            }
        });

    } else {
        sAlert.error('Invalid Input: Need search criteria - Owners ID' );
    }
}
