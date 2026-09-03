import btnArrow from "/assets/images/btn-arrow.svg";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactV2 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("¡Gracias por su mensaje!");
    }

    // Budget Range Control

    const [budgetValue, setBudgetValue] = useState(300);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudgetValue(Number(event.target.value));
    };

    return (
        <>
            <div className="contact-sec-2">
                <div className="custom-container">
                    <form id="contactForm" className="contact-form" onSubmit={handleForm}>
                        <input type="hidden" name="access_key" />
                        <input type="hidden" name="from_name" />
                        <input type="hidden" name="subject" />
                        <div className="col-2">
                            <div className="input-group">
                                <label htmlFor="first_name">Nombre:</label>
                                <input type="text" name="first_name" id="first_name" placeholder="Juan" autoComplete="off" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last_name">Apellido:</label>
                                <input type="text" name="last_name" id="last_name" placeholder="Pérez" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Correo:</label>
                            <input type="email" id="email" name="email" placeholder="juan.perez@correo.com" autoComplete="off" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="saas">¿Qué tipo de empresa tiene?:</label>
                            <div className="radio-btns">
                                <div className="radio-btn">
                                    <input type="radio" id="saas" name="company_type" defaultValue="SAAS" defaultChecked />
                                    <label htmlFor="saas">SAAS</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="agency" name="company_type" defaultValue="Agency" />
                                    <label htmlFor="agency">Agencia</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="banking" name="company_type" defaultValue="Banking" />
                                    <label htmlFor="banking">Banca</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="business" name="company_type" defaultValue="Business" />
                                    <label htmlFor="business">Empresa</label>
                                </div>
                                <div className="radio-btn">
                                    <input type="radio" id="other" name="company_type" defaultValue="Other" />
                                    <label htmlFor="other">Otro</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="app_design">¿Qué necesita de nosotros?</label>
                            <div className="checkbox-btns">
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="app_design" defaultValue="Soporte y Operacion TI" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Soporte y Operación</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="web_design" defaultValue="Seguridad y Redes" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Seguridad y Redes</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="branding" defaultValue="Optimizacion y Automatizacion" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Optimización</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="development" defaultValue="Consultoria y Cumplimiento" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Consultoría</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="cloud-service" defaultValue="Soluciones a la Medida" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">A la Medida</span>
                                </div>
                                <div className="checkbox-btn">
                                    <input type="checkbox" name="service_type" id="other-service" defaultValue="Other" />
                                    <span className="checkbox-marker"><i className="las la-check" /></span>
                                    <span className="checkbox-label">Otro</span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="pi_input">Presupuesto:</label>
                            <div className="input-group-budget">
                                <input id="pi_input" type="range" name="budget" min={100} max={300} step={10} value={budgetValue} onChange={handleInputChange} />
                                <div className="budget-values d-flex align-items-center justify-content-between w-full">
                                    <div className="left-value">$100K</div>
                                    <div className="right-value">$<span id="budget-value">{budgetValue}</span>k</div>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea name="message" id="message" required defaultValue={""} />
                        </div>
                        <div className="input-group">
                            <div className="single-checkbox checkbox-btn">
                                <input type="checkbox" name="terms_condition" id="condition" />
                                <span className="checkbox-marker"><i className="las la-check" /></span>
                                <span className="checkbox-label">Acepto los términos y condiciones</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="theme-btn">
                                Empezar Ahora
                                <img src={btnArrow} alt="icon" />
                            </button>
                        </div>
                        <div id="result" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactV2;