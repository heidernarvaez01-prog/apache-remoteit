import Union from '/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import { Link } from "react-router-dom";
import btnArrow from '/assets/images/btn-arrow.svg';
import useScaleDownAnimation from '../../hooks/useScaleDownAnimation';

interface DataType {
    name?: string;
    thumbFull1?: string;
    thumbFull2?: string;
    text?: string;
    price?: string;
    intro?: string;
    featuresIntro?: string;
    keyFeatures?: string[];
    benefitIntro?: string;
    benefitText?: string;
}

const romanNumerals = ["I.", "II.", "III.", "IV."];

const ServiceDetailsContent = ({ serviceData }: { serviceData: DataType }) => {
    const { name, text, price, thumbFull1, thumbFull2, intro, featuresIntro, keyFeatures, benefitIntro, benefitText } = serviceData

    const containerRef = useScaleDownAnimation('.scaleDown');


    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            {name}
                        </span>
                        <AnimatedText>
                            {intro}
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box" >
                            <img src={`/assets/images/${thumbFull1}`} alt="project-single" />
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">Servicio:</span>
                                <span className="subtitle">{name}</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">Descripción:</span>
                                <span className="subtitle">{text}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">Precio:</span>
                                <span className="subtitle">{price}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link to="/contact" className="theme-btn">
                                    EMPEZAR AHORA
                                    <img src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-single-content-wrap">
                        <div className="section-header">
                            <span className="section-subtitle">
                                <img src={Union} alt="icon" />
                                CARACTERÍSTICAS CLAVE
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    {featuresIntro}
                                </AnimatedText>
                                <ul>
                                    {(keyFeatures || []).map((feature, index) => (
                                        <li key={feature}>{romanNumerals[index]} {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="full-image" ref={containerRef}>
                            <img className="scaleDown" src={`/assets/images/${thumbFull2}`} alt="project-single" />
                        </div>
                        <div className="section-header">
                            <span className="section-subtitle">
                                <img src={Union} alt="icon" />
                                BENEFICIOS DEL SERVICIO
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    {benefitIntro}
                                </AnimatedText>
                                <div className="paragraphs">
                                    <p>{benefitText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;