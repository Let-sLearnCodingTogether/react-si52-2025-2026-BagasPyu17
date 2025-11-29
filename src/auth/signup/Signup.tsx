import { useState, type ChangeEvent, type FormEvent } from "react"
import { Form, NavLink } from "react-bootstrap"
import ApiClient from "../../utils/ApiClient";

interface SignUpform{
    username : string,
    email : string,
    password : string,
}


function Signup() {
    const [form,setForm] = useState<SignUpform>({
        username : "",
        email : "",
        password : ""
    });
    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        const {name,value}=event.target
        setForm({
            ...form,
            [name] : value
        })
        
    }

    const onSubmit = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try{
            const response = await ApiClient.post("/signup", form);
            console.log(response);
    } catch(error){
        console.log(error);
    }
        
    }
    return <div className="container mx-auto">
        <h4>Sign up</h4>

         <Form >
            <Form.Group controlId="formusername">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                    name="username"
                    type="text"
                    placeholder="username" />
                </Form.Group>
                 <Form.Group controlId="formemail">
                    <Form.Label>email</Form.Label>
                    <Form.Control
                    name="email"
                    type="text"
                    placeholder="email" />
                </Form.Group>
                 <Form.Group controlId="formpassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                    name="password"
                    type="text"
                    placeholder="password" />
                </Form.Group>
            </Form>
        </div>
}


export default Signup