import arrowDown from "/assets/images/arrow-down.svg";
import Union from "/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText";
import ServicesV2Data from "../../jsonData/services/ServicesV2Data.json";
import SingleServicesV2 from "./SingleServicesV2";

const ServicesV2 = () => {
    return (
        <>
            <div className="service-sec service-sec-2" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            NUESTROS VALORES
                        </span>
                        <AnimatedText>
                            Creemos en el poder transformador de la honestidad y la transparencia. Estos valores sostienen nuestro trabajo diario con cada empresa que confía en nosotros.
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Ilustración 3D
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Valores
                            </div>
                        </div>
                    </div>

                    <div className="service-lists">
                        {ServicesV2Data.map(service =>
                            <SingleServicesV2 service={service} key={service.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;