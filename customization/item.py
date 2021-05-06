def customize_name(doc, action):
 	if doc.item_group == "POWER TOOLS":
 		doc.item_name = f'{doc.brand} {doc.item_name} {doc.item_model}'
