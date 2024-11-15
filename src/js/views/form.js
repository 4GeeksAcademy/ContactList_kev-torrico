import React, {useState, useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const FormNewContact = ()=> {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const {state, actions} = useContext(Context)
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContact({
            ...contact,
            [name]: value
        })
    };


    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Contacto:", contact)
        const success = actions.newContact(contact);
        if (success) {
            console.log("Contacto creado!")
            navigate("/");
        } else {
            console.log("El contacto no fue creado debido a un error en la respuesta.");
        }
    };


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                        className="form-control" 
                        placeholder="Full Name"
                        name = "name"
                        value = {contact.name}
                        onChange = {handleChange}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        name= "email"
                        value = {contact.email}
                        onChange = {handleChange}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                        className="form-control" 
                        placeholder="Enter phone"
                        name= "phone"
                        value = {contact.phone}
                        onChange = {handleChange}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input 
                        className="form-control" 
                        placeholder="Enter address"
                        name= "address"
                        value = {contact.address}
                        onChange = {handleChange}
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    >
                        Submit
                    </button>
                <Link to="/" className="btn btn-link">or get back to contacts</Link>
            </form>
        </div>
        
    )
};

export default FormNewContact;