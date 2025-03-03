import Image from "next/image";
import "../../app/globals.css";

export default function ReparoDeHardware() {
    return (
        <>
            <main className="service-page">
                <h2>Reparo de Hardware</h2>
                <div className="service-content">
                    <div className="service-image">
                        <Image
                            src="/icons/garantia.svg"
                            width={128}
                            height={128}
                            alt="Reparo de hardware"
                        />
                    </div>
                    <div className="service-description">
                        <p>
                            Realizamos reparos em componentes de hardware de
                            computadores e laptops, como placas-mãe, fontes de
                            alimentação, conectores e mais. Nossa equipe técnica
                            é especializada em diagnósticos precisos e soluções
                            duradouras.
                        </p>
                        <div className="benefits">
                            <strong>Benefícios:</strong>
                            <ul>
                                <li>Diagnóstico gratuito</li>
                                <li>Reparos com peças de qualidade</li>
                                <li>Garantia no serviço realizado</li>
                            </ul>
                        </div>
                        <a
                            href="http://wa.me/5545999309809?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento%20para%20reparo%20de%20hardware"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
