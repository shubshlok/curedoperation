import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
	console.log('props object', props);
const { id, name, email, rollno, gender} = props.obj;

const deleteStudent = () => {
	axios
	.delete(
  "http://localhost:8000/students/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		// window.location.reload();
		props.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}  
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	<td>{gender}</td>
	</tr>
);
};

export default StudentTableRow;
