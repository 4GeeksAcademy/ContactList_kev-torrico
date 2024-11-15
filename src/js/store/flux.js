const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [

			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadContacts: async()=>{
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaKevin", {
					method: "GET"
				});
				const data = await response.json()
				console.log("Datos de contactos:", data.contacts);
				setStore({contactList: data.contacts})
			},
			newContact: async(contact)=>{
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaKevin/contacts", 
						{
							method: "POST",
							headers: {"Content-Type": "application/json"},
							body: JSON.stringify(contact)
						});
					if (!response.ok){
						const erroData = await response.json();
						throw new Error(`Error en el servidor: ${errorData.message || "No se pudo crear el contacto."}`);
					}
					await getActions().loadContacts();
					return true;
				}catch(error){
					console.error("Error en la creación del contacto:", error);
					return false;
				}
			},
			deleteContact: async(id)=>{
				try{
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaKevin/contacts/${id}`, 
						{
							method: "DELETE"
						});
				
					if (response.ok) {
						getActions().loadContacts();
					} else {
						console.error("Error al eliminar el contacto");
					}
				}catch(error){
					console.error("Error de red:", error);
				}
			},
			updateContact: async(id, contact)=>{
				try{
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaKevin/contacts/${id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						});
					if(response.ok){
						const data = await response.json();
						console.log("Contacto actualizado: ", contact)
						getActions().loadContacts();
					}else{
						console.error("Error al actualizar el contacto");
					}
				} catch(error){
					console.error("Error de red:", error);
				}
			},
		}
	};
};

export default getState;
