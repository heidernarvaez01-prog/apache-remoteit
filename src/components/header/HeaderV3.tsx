import sidebarbg from "/assets/images/sidebarbg.png";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "/assets/images/logo-1.png";
import useNotchScrollLink from "../../hooks/useNotchScrollLink";

const HeaderV3 = () => {

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

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

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

            {/* Notch Bar Menu Wrap */}
            <div className="notch-bar-menu-wrap">
                <ul>
                    <li><a className="anchor active" href="#hero">Inicio</a></li>
                    <li><a className="anchor" href="#about">Nosotros</a></li>
                    <li><a className="anchor" href="#services">Servicios</a></li>
                    <li><a className="anchor" href="#projects">Proyectos</a></li>
                    <li><a className="anchor" href="#awards">Logros</a></li>
                    <li><a className="anchor" href="#team">Equipo</a></li>
                    <li><a className="anchor" href="#pricing">Precios</a></li>
                    <li><a className="anchor" href="#contact">Contacto</a></li>
                </ul>
            </div>

            {/* Sidebar 2 */}
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

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link to="/" className="logo">
                            <img src={logo1} alt="logo" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link to="/">Inicio <span /></Link>
                                </li>
                                <li>
                                    <Link to="/projects">Proyectos <span>(7)</span></Link>
                                </li>
                                <li>
                                    <Link to="/about">Nosotros <span /></Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacto <span /></Link>
                                </li>
                                <li className="dropdown-menu-item">
                                    <Link to="#">Ver Todo <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link to="/">Inicio - Menú 1</Link></li>
                                        <li><Link to="/home-2">Inicio - Menú 2</Link></li>
                                        <li><Link to="/about">Nosotros</Link></li>
                                        <li><Link to="/projects">Proyectos</Link></li>
                                        <li><Link to="/project-details/1">Proyecto</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/blog-details/1">Detalle Blog</Link></li>
                                        <li><Link to="/service-details/1">Servicio</Link></li>
                                        <li><Link to="/faq">Preguntas</Link></li>
                                        <li><Link to="/contact">Contacto</Link></li>
                                        <li><Link to="/not-found">404</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <a className="with-border" href="tel:+573162253199">+57 316 225 3199</a>
                            <a href="mailto:contacto@apachesolucionesti.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV3;