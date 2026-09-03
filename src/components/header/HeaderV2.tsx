import { Link } from "react-router-dom";
import logo1 from "/assets/images/logo-1.png"

const HeaderV2 = () => {
    return (
        <>
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
                                        <li><Link to="/team-details/1">Detalle Equipo</Link></li>
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

export default HeaderV2;