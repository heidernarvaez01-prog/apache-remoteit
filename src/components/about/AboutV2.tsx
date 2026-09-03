import unionIcon from "/assets/images/Union.svg"
import angleIcon from "/assets/images/angle-icon-1.svg"
import funFact from "/assets/images/fun-fact1.png"
import funFact2 from "/assets/images/fun-fact2.png"
import funFact3 from "/assets/images/fun-fact3.png"
import funFact4 from "/assets/images/fun-fact4.png"
import AnimatedText from "../animated/AnimatedText"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> Nosotros
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Apache Soluciones TI ayuda a empresas a reducir fallas tecnológicas, mejorar procesos y proteger su información con soporte TI gestionado.
                            </AnimatedText>
                            <AnimatedText>
                                Trabajamos como aliado estratégico, gestionando infraestructura y seguridad para que su operación sea más eficiente, estable y confiable.
                            </AnimatedText>
                        </div>
                    </div>

                    {/* Fun Facts   */}
                    <div className="funfacts-wrap">
                        <div data-aos="fade-up" className="funfact-box active">
                            <img src={funFact} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Años de Experiencia</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">12<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={200} className="funfact-box">
                            <img src={funFact2} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Proyectos Completados</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">25K<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={400} className="funfact-box">
                            <img src={funFact3} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Premios Recibidos</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">110<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={600} className="funfact-box">
                            <img src={funFact4} alt="funtact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Clientes Satisfechos</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">4M<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;