import React from "react";
import { MDBDataTable } from "mdbreact";
import directory from "./directory.json"

const Directory = () => {
	return ( 
		<MDBDataTable responsive noBottomColumns paging={false} searching={false} data={directory} />
	);
};

export default Directory;