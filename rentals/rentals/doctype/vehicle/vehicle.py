# Copyright (c) 2024, FGN and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Vehicle(Document):
	def before_save(self):
		self.set_title()
     
	def set_title(self):
		self.title = f"{self.make} {self.model}, {self.year}"