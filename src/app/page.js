// src/app/page.js

import Image from "next/image";
import "./glitch.css";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="stack" style={{ "--stacks": 3 }}>
                    <span style={{ "--index": 0 }}>Tech Solution</span>
                    <span style={{ "--index": 1 }}>Tech Solution</span>
                    <span style={{ "--index": 2 }}>Tech Solution</span>
                </div>
            </div>
            <h3>Sua satisfação é nossa prioridade!</h3>

            <div className="svg-wrapper">
                <a
                    href="http://wa.me/5545988085688?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        height="60"
                        width="320"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect className="shape" height="60" width="320" />
                        <text
                            x="160"
                            y="35"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="text"
                        >
                            FALE CONOSCO
                        </text>
                    </svg>
                </a>
            </div>

            <div className="main--container">
                <div className="left--side">
                    <h4>Bem-vindo à TechSolution!</h4>
                    <p>
                        Somos uma assistência técnica especializada em celulares
                        e computadores, comprometida em oferecer{" "}
                        <span className="bold white">
                            soluções rápidas e eficazes
                        </span>{" "}
                        para todos os seus problemas tecnológicos.
                    </p>
                    <p>
                        Entendemos a importância de cada dispositivo na sua vida
                        e nos dedicamos a garantir que você esteja sempre
                        conectado. Seja para um conserto rápido ou para uma
                        manutenção mais complexa, nossos{" "}
                        <span className="bold white">
                            técnicos qualificados
                        </span>{" "}
                        estão prontos para ajudar.
                    </p>
                    <p>
                        Na TechSolution, sua{" "}
                        <span className="bold ciano">
                            satisfação é nossa prioridade
                        </span>
                        .‍
                    </p>
                </div>
                <div className="right--side">
                    <div className="column">
                        <a href="/troca-de-tela" className="card-link">
                            <div className="card--service">
                                <div className="card--service__image">
                                    <Image
                                        src={"/icons/garantia.svg"}
                                        width={64}
                                        height={64}
                                        alt="Troca de tela"
                                    />
                                </div>
                                <div className="card--service__title">
                                    <h5>Troca de Tela</h5>
                                </div>
                                <div className="card--service__body">
                                    <p>
                                        Substituímos telas quebradas de
                                        celulares e notebooks com peças de
                                        qualidade e garantia de serviço.
                                    </p>
                                    <button className="card-button">
                                        Clique e Saiba Mais
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="/reparo-de-hardware" className="card-link">
                            <div className="card--service">
                                <div className="card--service__image">
                                    <Image
                                        src={"/icons/garantia.svg"}
                                        width={64}
                                        height={64}
                                        alt="Reparo de hardware"
                                    />
                                </div>
                                <div className="card--service__title">
                                    <h5>Reparo de Hardware</h5>
                                </div>
                                <div className="card--service__body">
                                    <p>
                                        Consertamos placas-mãe, fontes e outros
                                        componentes de computadores e laptops
                                        com precisão.
                                    </p>
                                    <button className="card-button">
                                        Clique e Saiba Mais
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="/manutencao-de-software" className="card-link">
                            <div className="card--service">
                                <div className="card--service__image">
                                    <Image
                                        src={"/icons/garantia.svg"}
                                        width={64}
                                        height={64}
                                        alt="Manutenção de software"
                                    />
                                </div>
                                <div className="card--service__title">
                                    <h5>Manutenção de Software</h5>
                                </div>
                                <div className="card--service__body">
                                    <p>
                                        Resolvemos problemas de lentidão, vírus
                                        e falhas de sistema em computadores e
                                        celulares.
                                    </p>
                                    <button className="card-button">
                                        Clique e Saiba Mais
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="/recuperacao-de-dados" className="card-link">
                            <div className="card--service">
                                <div className="card--service__image">
                                    <Image
                                        src={"/icons/garantia.svg"}
                                        width={64}
                                        height={64}
                                        alt="Recuperação de dados"
                                    />
                                </div>
                                <div className="card--service__title">
                                    <h5>Recuperação de Dados</h5>
                                </div>
                                <div className="card--service__body">
                                    <p>
                                        Recuperamos arquivos perdidos de HDs,
                                        SSDs e celulares com segurança e
                                        eficiência.
                                    </p>
                                    <button className="card-button">
                                        Clique e Saiba Mais
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <h2 id="services">Nossos Serviços</h2>
            <div className="our--services--container">
                <div className="our--services__row">
                    <div className="our--services__card">
                        <Image
                            src={"/icons/leva-traz.png"}
                            width={300}
                            height={300}
                            alt="Serviço de Leva e Traz"
                        />
                        <span className="our--service__title">
                            Leva e Traz:
                        </span>
                        <span className="our--service__subtitle">
                            Mais Comodidade para Você!
                        </span>
                        <p>
                            Facilitamos seu dia a dia com nosso serviço de leva
                            e traz. Buscamos seu celular ou computador onde você
                            estiver.
                        </p>
                        <p>
                            Após o reparo,{" "}
                            <span className="bold white">
                                entregamos seu dispositivo
                            </span>{" "}
                            funcionando perfeitamente, sem que você precise sair
                            de casa!
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--service__title">
                            Reparo de Bateria
                        </span>
                        <span className="our--service__subtitle">
                            Energia renovada!
                        </span>
                        <p>
                            Trocamos baterias de celulares e notebooks que não
                            seguram mais carga.
                        </p>
                        <Image
                            src={"/icons/leva-traz.png"}
                            width={300}
                            height={300}
                            alt="Reparo de Bateria"
                        />
                        <p>
                            Usamos{" "}
                            <span className="bold white">
                                baterias de alta qualidade
                            </span>{" "}
                            para garantir maior autonomia ao seu dispositivo.
                        </p>
                    </div>
                </div>
                <div className="our--services__row">
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Upgrade de Computadores
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt="Upgrade de Computadores"
                        />
                        <p>
                            Aumentamos o desempenho do seu PC com instalação de
                            SSDs, mais memória RAM ou placas de vídeo modernas.
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Conserto de Conectores
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt="Conserto de Conectores"
                        />
                        <p>
                            Reparamos conectores de carga de celulares e portas
                            USB de laptops que não funcionam mais.
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Limpeza e Manutenção
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt="Limpeza e Manutenção"
                        />
                        <p>
                            Realizamos limpeza interna de computadores e
                            celulares para evitar superaquecimento e prolongar a
                            vida útil.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
