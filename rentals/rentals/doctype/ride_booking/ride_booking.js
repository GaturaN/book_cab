// Copyright (c) 2024, FGN and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
  refresh: function (frm) {},
  rate(frm) {
    frm.trigger("update_total_amount");
  },

  update_total_amount(frm) {
    let total_d = 0;
    for (let item of frm.doc.items) {
      // console.log(item.distance_covered);
      total_d += item.distance_covered;
    //   console.log(total_d);
    }
    const amount = frm.doc.rate * total_d;
    frm.set_value("total_amount", "amount");
    frm.save();
  },
});

frappe.ui.form.on("Ride Booking Item", {
  refresh: function (frm) {},

  distance_covered(frm, cdt, cdn) {
    // console.log(cdt, cdn);
    // console.log("Child Table Distance Changed!");
    // console.log(frappe.get_doc(cdt, cdn))
    // frappe.model.set_value(cdt, cdn, "source", "Updated Source")
    frm.trigger("update_total_amount");
  },
});
