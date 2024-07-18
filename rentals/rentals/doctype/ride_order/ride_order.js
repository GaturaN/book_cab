// Copyright (c) 2024, FGN and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
  refresh: function (frm) {
    // if status !== Accepted
    if (frm.doc.status === "New") {
      // add custom button
      frm.add_custom_button(
        "Accept",
        () => {
          // set status to accepted
          frm.set_value("status", "Accepted");
          //  save form
          frm.save();
        },
        "Actions"
      );

      frm.add_custom_button(
        "Reject",
        () => {
          // set status to rejected
          frm.set_value("status", "Rejected");
          //  save form
          frm.save();
        },
        "Actions "
      );
    }
  },
});
