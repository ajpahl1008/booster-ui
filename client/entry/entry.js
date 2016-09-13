

Template.entry.helpers({
    server_entry: function() {
        return Session.get('serverEntry');
    },
    uaid_entry: function() {
        return Session.get('uaidEntry');
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
    'change #uaidRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('uaidEntry', true);
        Session.set('ownerEntry', false);
        Session.set('patchEntry', false);
    },
    'change #ownerRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('uaidEntry', false);
        Session.set('ownerEntry', true);
        Session.set('patchEntry', false);

    },
    'change #patchRadioButton': function () {
        Session.set('serverEntry', false);
        Session.set('uaidEntry', false);
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

});

 clearPatchUpdateEntry = function(e, template){
     template.find('form.ui.form').reset();
     template.find('form.ui.form').reset();

}