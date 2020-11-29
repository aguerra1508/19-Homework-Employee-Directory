import React from "react";

function Directory(props){
    return (
			<table>
  <tr>
    <th>ID:</th>
		<th>First Name:</th>
    <th>Last Name:</th>
    <th>Job Title</th>
  </tr>
	{props.employees.map(employees => (
		<tr>
			<td>{employees.id}</td>
      <td>{employees.firstName}</td>
			<td>{employees.lastName}</td>
			<td>{employees.jobTitle}</td>
		</tr>
      ))}
</table>
		)
  };

export default Directory;
