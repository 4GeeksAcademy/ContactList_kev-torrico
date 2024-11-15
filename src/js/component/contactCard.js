import React from "react";

const ContactCard = ({imagen, fullName, address, phone, email})=> {
    return(
        <div className="container border-2 ">
            <div>{imagen}</div>
            <div>
                {fullName}
                {address}
                {phone}
                {email}
            </div>
            <div>editar</div>
            <div>borrar</div>
        </div>
    );
}
export default ContactCard;