// Copyright (c) 2024, FGN and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
  // refresh: function(frm) {
  // }
});

frappe.ui.form.on("Ride Booking Item", {
  refresh: function (frm) {

  },

  distance_covered(frm, cdt, cdn) {
    // console.log(cdt, cdn);
    // console.log("Child Table Distance Changed!");
	// console.log(frappe.get_doc(cdt, cdn))
	// frappe.model.set_value(cdt, cdn, "source", "Updated Source")
  },
});
