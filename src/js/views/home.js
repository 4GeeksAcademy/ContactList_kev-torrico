import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.js";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { getActions } from "../store/flux.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleDeleteContact = (id)=>{
		actions.deleteContact(id);
	};
	const handleEditContact = (id)=>{
		actions.updateContact(id);
		navigate(`/edit/${id}`);
	}

	return(
		<div className="text-center mt-2">
			<div className="container">
				{store.contactList.map((item, index)=>{
					return (
						<ContactCard 
							key = {item.id}
							id={item.id}
							fullName={item.name} 
							address={item.address} 
							phone={item.phone}
							email={item.email} 
							onDelete={()=>handleDeleteContact(item.id)}
							onEdit={()=>handleEditContact(item.id)}
							/>
					)
				})};
			</div>
		</div>
	);
};
