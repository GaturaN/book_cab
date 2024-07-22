// Copyright (c) 2024, FGN and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vehicle', {
	refresh: function(frm) {

	},

	get_summary(frm){

		if (!frm.get_field("summary").$wrapper.find("h1").length) {
			frm.get_field("summary").$wrapper.append("<h1>Here is your summary</h1>");
		}
	}
});
