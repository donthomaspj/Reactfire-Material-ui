import { TextField, Button} from '@material-ui/core';
import * as React from 'react';
import {Formik, Form} from 'formik';


interface Values{
    firstName: string;
    lastName: string;
    email: string;

}

interface Props {

    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> =({onSubmit}) =>{
    return (
        <Formik initialValues={{ firstName:'', lastName: '', email:''}} onSubmit={(values)=>{
            onSubmit(values);
        }}>
            {({values, handleChange,handleBlur}) => (
            <Form>
                <div>
                <TextField placeholder="first Name" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <div>
                <TextField placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <div>
                <TextField placeholder="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <Button type="submit">Submit</Button>
                <pre>
                    {JSON.stringify(values, null,2)}
                </pre>
            </Form>
            )}
        </Formik>
    );
};