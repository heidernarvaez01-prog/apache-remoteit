import Union from "/assets/images/Union.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        Faq
                    </span>
                    <h2 className="section-title section-title2">
                        Preguntas Frecuentes, <span>Respuestas Claras</span>
                    </h2>
                    <p className="section-desc">Ya sea que tenga una duda puntual o necesite información general, aquí resolvemos
                        las dudas más comunes sobre nuestros servicios y planes.</p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <img src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <img src={pricingShape2} alt="shape" />
                    </div>

                    {/* Faq 1 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="number">I.</span> ¿Qué servicios de TI ofrecen? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Ofrecemos soporte y operación TI, seguridad y redes, optimización y automatización, y consultoría y cumplimiento para empresas de cualquier tamaño.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 2 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="number">II.</span> ¿Cuánto tardan en responder una falla? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Respondemos según la criticidad: fallas críticas en 1 hora, altas en 4 horas, medias en 8 horas y bajas en 24 horas, con solución garantizada.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 3 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="number">III.</span> ¿Ofrecen soporte remoto y presencial? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Sí, la mayoría de nuestros servicios se prestan de forma remota, y ofrecemos soporte en sitio cuando el caso lo requiere.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 4 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="number">IV.</span> ¿Cómo funcionan los planes mensuales? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cada plan incluye un conjunto fijo de servicios por una tarifa mensual; puede escalar de Básico a Profesional según crezcan sus necesidades.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 5 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className="number">V.</span> ¿Puedo cambiar o cancelar mi plan? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Sí, puede cambiar de plan cuando lo necesite; la cancelación solo requiere 30 días de preaviso.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 6 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span className="number">VI.</span> ¿Mi información está protegida? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Toda la información de su empresa es confidencial y no se divulga a terceros bajo ninguna circunstancia.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 7 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <span className="number">VII.</span> ¿Cuánto dura el contrato de servicio? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>El contrato tiene una duración de 12 meses renovables automáticamente, con posibilidad de cancelar con 30 días de preaviso.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;