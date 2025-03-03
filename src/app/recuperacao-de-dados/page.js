import Image from "next/image";
import "../../app/globals.css";

export default function RecuperacaoDeDados() {
    return (
        <>
            <main className="service-page">
                <h2>Recuperação de Dados</h2>
                <div className="service-content">
                    <div className="service-image">
                        <Image
                            src="/icons/garantia.svg"
                            width={128}
                            height={128}
                            alt="Recuperação de dados"
                        />
                    </div>
                    <div className="service-description">
                        <p>
                            Recuperamos arquivos perdidos ou deletados de HDs,
                            SSDs, pendrives e celulares. Nossa tecnologia
                            avançada garante segurança e alta taxa de sucesso na
                            recuperação.
                        </p>
                        <div className="benefits">
                            <strong>Benefícios:</strong>
                            <ul>
                                <li>Análise gratuita do dispositivo</li>
                                <li>
                                    Recuperação de fotos, vídeos e documentos
                                </li>
                                <li>Confidencialidade dos dados garantida</li>
                            </ul>
                        </div>
                        <a
                            href="http://wa.me/5545988085688?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento%20para%20recuperação%20de%20dados"
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
