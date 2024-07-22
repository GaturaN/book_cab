# Copyright (c) 2024, FGN and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class RideBooking(Document):
    def validate(self):
        if not self.rate:
            self.rate = frappe.db.get_single_value("Rentals Settings", "standard_rate")
            
             
        total_distance = 0
        for item in self.items:
            total_distance += item.distance_covered
            
        self.total_amount = self.rate * total_distance
