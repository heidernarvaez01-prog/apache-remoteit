import contact from '/assets/images/contact.png';
import btnArrow from '/assets/images/btn-arrow.svg';
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <img className="hero-shape" src={contact} alt="Shape" />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{`"En Apache Soluciones TI convertimos la tecnología en una ventaja: reducimos fallas, protegemos su información y optimizamos su operación."`}</p>
                            </div>
                            <div className="author-info">
                                <h4>Compromiso</h4>
                                <span>Soporte TI Gestionado</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Página no encontrada"}</h2>
                                <h2>APACHE</h2>
                            </div>
                            <Link to="/contact" className="theme-btn">
                                {`Hablemos`}
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;