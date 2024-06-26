
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./form.css"
function AddProducts() {

 

  return (
    <div>
       <Formik
       initialValues={{ name: '', description: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         description: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required')
     
       })}
       onSubmit={(values) => {  
         fetch("https://northwind.vercel.app/api/categories",{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(values)
      })     
        
      }}
     >
       <Form className='form'>
         <label htmlFor="Name"> Name</label>
         <br />
         <Field name="name" type="text" />
         <ErrorMessage name="Name" />
 <br />
         <label htmlFor="lastName">description</label>
         <br />
         <Field name="description" type="text" />
         <ErrorMessage name="description" />
 <br />       
         <button  type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default AddProducts
