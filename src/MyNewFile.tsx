import { TextField, Button, FormControl, InputLabel,Input,FormHelperText} from '@material-ui/core';
import * as React from 'react';
import firebase from './firebase';



//fn submit
export default function FnSubmit(){

    const [email, setEmail] = React.useState <string>();
    const [password, setPassword] = React.useState <string>();
 
    //fn
    const sendData =() => {
        //id
        let id = firebase.database().ref('users').push().key;

        let userOject = {
            id,
            email,
            password,
        }

        firebase.database().ref('users/' + id).set(userOject).then(()=>{
            console.log("Data sent");
            alert("Valid Login")
        }).catch(error =>{
            console.log("error", {error});
        })
    }

    return(
        <div>
            
            <form 
            style={{display:"flex", flexDirection:"column"}}

            onSubmit ={e => {
                e.preventDefault();
                sendData();
                console.log({email, password});
            }}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input onChange={e => setEmail(e.target.value)} type="email" id="my-input" aria-describedby="my-helper-text" />
            
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input onChange={e => setPassword(e.target.value)} type="password" aria-describedby="my-helper-text" />

            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            <Button type="submit">Submit</Button>
            </form>
            
        </div>
    )
}