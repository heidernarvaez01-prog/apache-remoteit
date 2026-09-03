import btnArrowIcon from "/assets/images/btn-arrow.svg";
import { Link } from "react-router-dom";

const HeroV1 = () => {
    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            <video loop muted autoPlay>
                                <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>“En Apache Soluciones TI creemos que la tecnología no debería ser un problema. Hoy muchas empresas pierden tiempo y dinero por fallas técnicas y riesgos de seguridad.</p>
                                <p>Trabajamos como su aliado tecnológico: gestionamos infraestructura, seguridad y procesos para que su operación sea estable, segura y eficiente. “</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Compromiso</h4>
                                <span>Soporte TI Gestionado</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Tecnología</h2>
                                <h2>Que No Falla</h2>
                            </div>

                            {/* Button Section */}
                            <Link to="/contact" className="theme-btn">
                                {`Hablemos`}
                                <img src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;