import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Directory = (props) => {
	const data = {
		columns: [{
				label: 'Employee ID #',
				field: 'id',
				sort: 'asc'
			},
			{
				label: 'First Name',
				field: 'firstName',
				sort: 'asc'
			},
			{
				label: 'Last Name',
				field: 'lastName',
				sort: 'asc'
			},
			{
				label: 'Job Title',
				field: 'title',
				sort: 'asc'
			},
			{
				label: 'Salary',
				field: 'salary',
				sort: 'asc'
			},
		],
		rows: [{
			'id': 1,
			'firstName': 'John',
			'lastName' : 'Doe',
			'title': 'Manager',
			'salary': '$100,000',
		}, ]
	};

	return ( 
	<MDBTable responsive>
		<MDBTableHead columns = {data.columns}/>
		<MDBTableBody rows = {data.rows}/>
	</MDBTable>
	);
};

export default Directory;