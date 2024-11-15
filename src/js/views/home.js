import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.js";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {

	const {store} = useContext(Context);


	return(
		<div className="text-center mt-5">
			<div className="container">
				{store.contactList.map((item, index)=>{
					return (
						<ContactCard 
							key = {item.id}
							fullName={item.name} 
							address={item.address} 
							phone={item.phone}
							email={item.email} 
							/>
					)
				})};
			</div>
		</div>
	);
};
