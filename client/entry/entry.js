

Template.entry.helpers({
    server_entry: function() {
        return Session.get('serverEntry');
    },
    uaid_entry: function() {
        return Session.get('applicationEntry');
    },
    owner_entry: function() {
        return Session.get('ownerEntry');
    },
    patch_entry: function() {
        return Session.get('patchEntry');
    },

});


Template.entry.events({
    'change #serverRadioButton': function () {
        Session.set('serverEntry', true);
        Session.set('uaidEntry', false);
        Session.set('ownerEntry', false);
        Session.set('patchEntry', false);
    },
    'change #applicationRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('applicationEntry', true);
        Session.set('ownerEntry', false);
        Session.set('patchEntry', false);
    },
    'change #ownerRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('applicationEntry', false);
        Session.set('ownerEntry', true);
        Session.set('patchEntry', false);

    },
    'change #patchRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('applicationEntry', false);
        Session.set('ownerEntry', false);
        Session.set('patchEntry', true);
    },
    'click #patchEntryButton': function (e, template) {
        var id = template.find('.patchId').value;
        var platform = template.find('.patchPlatform').value;
        var description = template.find('.patchDescription').value;
        var patchInfo = {id, platform, description};
        if ( id == '' || platform == '' || description =='') {
            sAlert.warning("Incomplete Data");
            return;
        }
        Meteor.call('addPatch', patchInfo, function (error, results) {
                if (results.data.success != '') {
                    Session.set('savedPatch', results.data);
                    console.log(results.data);
                    sAlert.success(results.data.success);
                    clearPatchUpdateEntry(e, template);
                }
                if (results.data.error != '') {
                    sAlert.error(results.data.error);
                }
        });

    },
    'click #clearPatchEntry': function (e, template) {
        clearPatchUpdateEntry(e, template);

    },

    'click #serverEntryButton': function (e, template) {
        var id = template.find('.serverName').value;
        var operatingSystem = template.find('.osName').value;
        var operatingSystemVersion = template.find('.osVersion').value;
        var dateFormat = require('dateformat');
        var today = dateFormat(today,"yyyy-mm-dd");
        var lastUpdateDate = today;
        var relatedUaids = template.find('.relatedApps').value;
        var serverOwnerId = template.find('.serverOwner').value;
        var serverInfo = {id, operatingSystem, operatingSystemVersion, lastUpdateDate, relatedUaids, serverOwnerId};
        if ( id == '' || operatingSystem == '' || operatingSystemVersion =='' || relatedUaids == '' || serverOwnerId == '') {
            sAlert.warning("Incomplete Data");
            return;
        }
        Meteor.call('addServer', serverInfo, function (error, results) {
            if (results.data.success != '') {
                Session.set('savedServer', results.data);
                console.log(results.data);
                sAlert.success(results.data.success);
                clearServerUpdateEntry(e, template);
            }
            if (results.data.error != '') {
                sAlert.error(results.data.error);
            }
        });

    },
    'click #clearServerEntry': function (e, template) {
        clearServerUpdateEntry(e, template);

    },

    'click #applicationEntryButton': function (e, template) {
        var id = template.find('.uaidId').value;
        var name = template.find('.applicationName').value;
        var description = template.find('.applicationDescription').value;
        var ownerId = template.find('.applicationOwner').value;
        var applicationInfo = {id, name, description, ownerId,};
        if ( id == '' || name == '' || description =='' || ownerId == '' || applicationInfo == '') {
            sAlert.warning("Incomplete Data");
            return;
        }
        Meteor.call('addApplication', applicationInfo, function (error, results) {
            if (results.data.success != '') {
                Session.set('savedApplication', results.data);
                console.log(results.data);
                sAlert.success(results.data.success);
                clearApplicationUpdateEntry(e, template);
            }
            if (results.data.error != '') {
                sAlert.error(results.data.error);
            }
        });

    },
    'click #clearApplicationEntry': function (e, template) {
        clearApplicationUpdateEntry(e, template);

    },



});

 clearPatchUpdateEntry = function(e, template){
     template.find('form.ui.form').reset();
     template.find('form.ui.form').reset();

}

clearServerUpdateEntry = function(e, template){
    template.find('form.ui.form').reset();
    template.find('form.ui.form').reset();

}

clearApplicationUpdateEntry = function(e, template){
    template.find('form.ui.form').reset();
    template.find('form.ui.form').reset();

}
