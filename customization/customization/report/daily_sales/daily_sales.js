// Copyright (c) 2016, VPS Consultancy and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Daily Sales"] = {
	"filters": [
		{
			fieldname: "cf_from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			reqd: 1
		},
		{
			fieldname:"cf_to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.get_today(),
			reqd: 1
		}

	]
};
