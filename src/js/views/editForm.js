import React, {useState, useContext, useEffect} from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import getState, {state, actions} from  "../store/flux"

const UpdateContact = ()=> {
    const {state, actions} = useContext(Context)
    const {id} = useParams();
    console.log("ID en UpdateContact:", id);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const navigate = useNavigate();

    console.log("ID en UpdateContact:", id);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContact({
            ...contact,
            [name]: value
        })
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Contacto a actualizar:", contact);
        console.log("id del contacto:", id)
        actions.updateContact(id, contact); 
        navigate("/"); 
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

export default UpdateContact;