import btnArrow from "/assets/images/btn-arrow.svg"
import footerBigLogo from "/assets/images/footer-big-logo.png"
import { Link } from "react-router-dom";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>EMPRESA</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> Nosotros
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> Equipo
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> Historias
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/projects">
                                                <img src={btnArrow} alt="icon" /> Proyectos
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} DERECHOS RESERVADOS
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>ESCRÍBANOS</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+573162253199" className="with-border">+57 316 225 3199</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="mailto:contacto@apachesolucionesti.com" className="with-border">contacto@apachesolucionesti.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="theme-btn">
                                        {`Hablemos`}
                                        <img src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Redes</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://instagram.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://twitter.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://behance.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Behance
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://dribbble.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Dribbble
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    OPERAMOS DESDE COLOMBIA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <img data-aos="slide-up" data-aos-duration={700} src={footerBigLogo} alt="logo" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;