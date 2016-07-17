if (Meteor.isClient) {
  Template.serverInfo.helpers({
      server_list: function() {
        return Session.get('targetServer');
      }
      // ,
      // change_record: function() {
      //     return Session.get('targetServer').changeRecord;
      // },
      // change_status: function() {
      //     return Session.get('targetServer').changeRecordStatus;
      // },
      // server_name: function() {
      //     return Session.get('targetServer').serverName;
      // },
      // reboot_required: function() {
      //     return Session.get('targetServer').rebootRequired;
      // },
      // server_owner: function() {
      //   return Session.get('targetServer').serverOwner;
      // },
      // server_uaids: function() {
      //   return Session.get('targetServer').serverUAIDs;
      // },
      // pending_patch_info: function() {
      //   return Session.get('targetServer').pendingPatchInfo;
      // },
      // last_patch_date: function() {
      //   return Session.get('targetServer').lastPatchingDate;
      // }

  });

}
