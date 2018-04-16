import React from 'react';

function Statistic(props) {
	const total = props.users.length;
	const isArchive = props.users.filter(user => user.isArchive).length;
	const notIsArchive = total - isArchive;
	
	return(
	   <table>
	       <tbody>
		      <tr>
			      <th>Всего сотрудников:</th>
				  <td>{total}</td>
			  </tr>
			  <tr>
			      <th>В архиве:</th>
				  <td>{isArchive}</td>
			  </tr>
			  <tr>
			      <th>Вне архива:</th>
				  <td>{notIsArchive}</td>
			  </tr>
		   </tbody>
	   </table>
	);
}

export default Statistic;