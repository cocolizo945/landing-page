import React, { useState }from "react";
import '../styles/contact-form.css'


export default function ContactForm(){
        const [formData, setFormData] = useState({
            email: "",
            phoneNumber: "",
            name: "",
            lastName: "",
            message: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const payload = {
                data: formData
            };
    
            try {
                const response = await fetch("http://192.168.1.30:5000/api/email/example-object", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
    
                if (response.ok) {
                    console.log("Formulario enviado exitosamente");
    
                    // Limpiar los campos
                    setFormData({
                        email: "",
                        phoneNumber: "",
                        name: "",
                        lastName: "",
                        message: "",
                    });
                } else {
                    console.error("Error al enviar el formulario");
                }
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        };
        
    return(
        <div className="contact-container">
            <div className="contact-data">
                <div className="instructions">Email, call or complete the form to<br/>
                                              learn how SnowQuest can solve your<br/> 
                                              needs.</div>
                <div className="text">snowquest.io.business.com</div>
                <div className="text">xxx-xxx-xxxx</div>
                <div className="text">1234 Maplewood ave<br/>
                                      Springfield, CA 90210<br/>
                                      United States</div>
            </div>
            <div className="contact-form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group name-lastname">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                />
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}