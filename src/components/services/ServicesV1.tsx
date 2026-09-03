import Union from "/assets/images/Union.svg"
import arrowDown from "/assets/images/arrow-down.svg"
import AnimatedText from "../animated/AnimatedText"
import ServicesV1Data from "../../jsonData/services/ServicesV1Data.json"
import SingleServicesV1 from "./SingleServicesV1"

const ServicesV1 = () => {
    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            Nuestros Servicios
                        </span>
                        <AnimatedText>
                            {`En Apache Soluciones TI ofrecemos soluciones de TI a la medida para proteger, optimizar y hacer crecer la operación de su empresa.`}
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Servicio
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Incluye
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Ilustración 3D
                            </div>
                        </div>
                    </div>

                    {/* Service Lists */}
                    <div className="service-lists">
                        {ServicesV1Data.map(services =>
                            <SingleServicesV1 services={services} key={services.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;