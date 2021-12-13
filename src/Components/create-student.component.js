// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ name: '', age: '' ,gender: '' ,date: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'  http://localhost:8000/students/',
	studentObject)
	.then(res => {
		if (res.status === 201)
		
		alert('Student successfully created')
		
		else
		Promise.reject()
		
	} )
	.catch(err => alert('Something went wrong'))
	setFormValues({ name: '',  age: '' ,gender: '' ,date: '' });
}
	
// Return student form
return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>
)
}

export default CreateStudent
