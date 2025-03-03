import Image from "next/image";
import "../../app/globals.css";

export default function ManutencaoDeSoftware() {
    return (
        <>
            <main className="service-page">
                <h2>Manutenção de Software</h2>
                <div className="service-content">
                    <div className="service-image">
                        <Image
                            src="/icons/garantia.svg"
                            width={128}
                            height={128}
                            alt="Manutenção de software"
                        />
                    </div>
                    <div className="service-description">
                        <p>
                            Resolvemos problemas de software em computadores e
                            celulares, incluindo remoção de vírus, otimização de
                            desempenho e reinstalação de sistemas operacionais
                            como Windows e Android.
                        </p>
                        <div className="benefits">
                            <strong>Benefícios:</strong>
                            <ul>
                                <li>Remoção completa de malwares</li>
                                <li>Atualizações e otimização do sistema</li>
                                <li>Suporte técnico especializado</li>
                            </ul>
                        </div>
                        <a
                            href="http://wa.me/5545999309809?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento%20para%20manutenção%20de%20software"
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
