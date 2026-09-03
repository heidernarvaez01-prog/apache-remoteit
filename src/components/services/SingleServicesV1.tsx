import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    activeClass?: string;
    name?: string;
    thumb?: string;
    icon?: string;
    keyFeatures?: string[];
}

const romanNumerals = ["I.", "II.", "III.", "IV."];

const SingleServicesV1 = ({ services }: { services: DataType }) => {
    const { id, icon, name, thumb, activeClass, keyFeatures } = services

    return (
        <>
            <div className={`service-box ${activeClass}`}>
                <div className="service-inner">
                    <h4 className="title">
                        <img src={`/assets/images/${icon}`} alt="icon" />
                        <Link to={`/service-details/${id}`}>{name}</Link>
                    </h4>
                    <p className="service-feature-lists">
                        {(keyFeatures || []).map((feature, index) => (
                            <span key={feature}>{romanNumerals[index]} {feature} </span>
                        ))}
                    </p>
                    <div className="service-img-box">
                        <img src={`/assets/images/${thumb}`} alt="Icon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServicesV1;