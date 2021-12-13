import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	age: Yup.number()
	.positive("Invalid age")
	.integer("Invalid age")
	.required("Required"),
	gender: Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
            
			<Field name="name" type="text"
				className="form-control" placeholder="Enter Name" />
                
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormGroup>
			<Field name="email" type="text"
				className="form-control"  placeholder="Enter Email"/>
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="age" type="number"
				className="form-control"  placeholder="Enter Your Age"/>
			<ErrorMessage
			name="age"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="gender" type="text"
				className="form-control"  placeholder="Enter Gender"/>
			<ErrorMessage
			name="gender"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="date" type="date"
				className="form-control"  placeholder="Select date of birth"/>
			<ErrorMessage
			name="date"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
