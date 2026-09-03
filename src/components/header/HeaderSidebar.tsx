import sidebarbg from "/assets/images/sidebarbg.png";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";

const HeaderSidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>

            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <img src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>Operamos desde</span>
                                <a href="mailto:contacto@apachesolucionesti.com">E: contacto@apachesolucionesti.com</a>
                            </li>
                            <li>
                                <span>Colombia</span>
                                <a href="tel:+573162253199">+57 316 225 3199</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>Nosotros</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Servicios</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Proyectos</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Logros</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Equipo</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Precios</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;
