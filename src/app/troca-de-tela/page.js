import Image from "next/image";
import "../../app/globals.css";

export default function TrocaDeTela() {
    return (
        <>
            <main className="service-page">
                <h2>Troca de Tela</h2>
                <div className="service-content">
                    <div className="service-image">
                        <Image
                            src="/icons/garantia.svg"
                            width={128}
                            height={128}
                            alt="Troca de tela"
                        />
                    </div>
                    <div className="service-description">
                        <p>
                            Oferecemos serviços profissionais de troca de tela
                            para celulares e notebooks. Seja uma tela quebrada,
                            rachada ou com problemas de toque, nossa equipe
                            utiliza peças de alta qualidade para garantir o
                            melhor resultado.
                        </p>
                        <div className="benefits">
                            <strong>Benefícios:</strong>
                            <ul>
                                <li>
                                    Peças originais ou compatíveis de alta
                                    qualidade
                                </li>
                                <li>Garantia de 3 meses no serviço</li>
                                <li>
                                    Reparos rápidos, muitas vezes no mesmo dia
                                </li>
                            </ul>
                        </div>
                        <a
                            href="http://wa.me/5545999309809?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento%20para%20troca%20de%20tela"
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
