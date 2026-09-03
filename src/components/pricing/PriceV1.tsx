import { Link } from "react-router-dom";
import Union from "/assets/images/Union.svg"
import pricingNavbar from "/assets/images/pricing-navbar.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"
import btnArrow from "/assets/images/btn-arrow.svg"
import featuredIcon from "/assets/images/featured-icon.svg"
import { useRef } from "react";
import useTabIndicator from "../../hooks/useTabIndicator";

const PriceV1 = () => {

    const indicatorRef = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    useTabIndicator({ navRef, indicatorRef });


    return (
        <>
            <div className="pricing-sec" id="pricing">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            PLANES Y PRECIOS
                        </span>
                        <h2 className="section-title section-title2">
                            Planes Claros, <span>Resultados Reales</span>
                        </h2>
                        <p className="section-desc">
                            {`Ya sea que esté iniciando o ya tenga una operación establecida,`}<br />
                            tenemos un plan que se ajusta a su empresa y presupuesto.
                        </p>
                    </div>
                    <div className="pricing_nav_wrap">
                        <ul className="pricing_nav nav-tabs" id="myTab" role="tablist" ref={navRef}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Mensual</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false">Anual</button>
                            </li>
                        </ul>
                        <span className="nav-hover-shape" ref={indicatorRef} style={{ left: 439, opacity: 1 }}>
                            <img src={pricingNavbar} alt="shape" />
                        </span>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Plan Básico</span>
                                        <h3 className="price">$500K<span>/mes</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal para pequeñas empresas que necesitan soporte esencial.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Soporte remoto</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Gestión de incidencias</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Mantenimiento básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Usuarios y equipos</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Soporte por correo</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#" className="theme-btn">
                                            {`Empezar Ahora`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Plan Profesional</span>
                                        <h3 className="price">$1.2M<span>/mes</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal para empresas que necesitan soporte y seguridad avanzados.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Todo lo del Plan Básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monitoreo de red básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Gestión de firewall</li>
                                            <li><span className="icon"><i className="las la-check" /></span> VPN para remotos</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Mantenimiento programado</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Empezar Ahora`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="annual" role="tabpanel" aria-labelledby="annual-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Plan Básico</span>
                                        <h3 className="price">$500K<span>/mes</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal para pequeñas empresas que necesitan soporte esencial.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Soporte remoto</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Gestión de incidencias</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Mantenimiento básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Usuarios y equipos</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Soporte por correo</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Empezar Ahora`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Plan Profesional</span>
                                        <h3 className="price">$1.2M<span>/mes</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal para empresas que necesitan soporte y seguridad avanzados.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Todo lo del Plan Básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monitoreo de red básico</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Gestión de firewall</li>
                                            <li><span className="icon"><i className="las la-check" /></span> VPN para remotos</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Mantenimiento programado</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Empezar Ahora`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;