import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ id, fullName, address, phone, email, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const handleEditClick = (id) => {
        navigate(`/edit/${id}`);
      };



    return (
        <div className="contact-card container border-2 p-2 pb-3 mb-4 d-flex align-items-center justify-content-between shadow-sm mt-4">
            <div className="d-flex align-items-center">
                <div className="contact-image me-4">
                    <img 
                        src={'https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U='} 
                        className="rounded-circle" 
                        style={{ width: '200px', height: '200px', objectFit: 'cover',}}
                        alt="Contacto"
                    />
                </div>
                <div className="contact-info" style={{ marginLeft: '50px', textAlign: 'left'}}>
                    <div className="font-bold text-lg fs-4">{fullName}</div>
                    <div className="text-gray-600 d-flex align-items-center text-secondary">
                        <i className="fa-solid fa-location-dot me-2"></i> {address}
                    </div>
                    <div className="text-gray-600 d-flex align-items-center text-secondary">
                        <i className="fa-solid fa-phone me-2"></i> {phone}
                    </div>
                    <div className="text-gray-600 d-flex align-items-center text-secondary">
                        <i className="fa-solid fa-envelope me-2"></i> {email}
                    </div>
                </div>
            </div>
            <div className="contact-actions d-flex pe-2">
                <button 
                    onClick={()=> handleEditClick(id)} 
                    className="text-blue-500 me-4" 
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <i className="fa-solid fa-pen fs-5"></i>
                </button>
                <button className="text-red-500 hover:text-red-700" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <i className="fa-solid fa-trash fs-5"></i>
                </button>
            </div>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>If you delete this thing the entire universe will go down</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                    <button 
                        type="button" 
                        onClick={()=>{onDelete();}} 
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        >
                            Yes baby!
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactCard;
