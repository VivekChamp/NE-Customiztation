import frappe

def customize_name(doc, action):
	if doc.item_group == "POWER TOOLS" and doc.is_power_tools == 0 :
		doc.is_power_tools = 1
		doc.item_name = f'{doc.brand} {doc.item_name} {doc.item_model}' 