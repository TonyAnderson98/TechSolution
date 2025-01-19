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

            {/* <h1>TechSolution</h1> */}
            <h3>Sua satisfação é nossa prioridade!</h3>

            <div className="svg-wrapper">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="card--service">
                            <div className="card--service__image">
                                <Image
                                    src={"/icons/garantia.svg"}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="card--service__title">
                                <h5>Orçamento Grátis</h5>
                            </div>
                            <div className="card--service__body">
                                <p>
                                    Realizamos o diagnóstico e orçamento
                                    gratuito para que você saiba exatamente o
                                    que precisa antes de decidir.
                                </p>
                            </div>
                        </div>
                        <div className="card--service">
                            <div className="card--service__image">
                                <Image
                                    src={"/icons/garantia.svg"}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="card--service__title">
                                <h5>Garantia</h5>
                            </div>
                            <div className="card--service__body">
                                <p>
                                    Realizamos o diagnóstico e orçamento
                                    gratuito para que você saiba exatamente o
                                    que precisa antes de decidir.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card--service">
                            <div className="card--service__image">
                                <Image
                                    src={"/icons/garantia.svg"}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="card--service__title">
                                <h5>Agiliade</h5>
                            </div>
                            <div className="card--service__body">
                                <p>
                                    Realizamos o diagnóstico e orçamento
                                    gratuito para que você saiba exatamente o
                                    que precisa antes de decidir.
                                </p>
                            </div>
                        </div>
                        <div className="card--service">
                            <div className="card--service__image">
                                <Image
                                    src={"/icons/garantia.svg"}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="card--service__title">
                                <h5>Qualidade</h5>
                            </div>
                            <div className="card--service__body">
                                <p>
                                    Realizamos o diagnóstico e orçamento
                                    gratuito para que você saiba exatamente o
                                    que precisa antes de decidir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Nossos Serviços</h2>
            <div className="our--services--container">
                <div className="our--services__row">
                    <div className="our--services__card">
                        <Image
                            src={"/icons/leva-traz.png"}
                            width={300}
                            height={300}
                            alt=""
                        />
                        <span className="our--service__title">
                            Leva e Traz:
                        </span>
                        <span className="our--service__subtitle">
                            Mais Comodidade para Você!
                        </span>
                        <p>
                            A vida anda corrida? Não se preocupe! Oferecemos o
                            serviço de leva e traz para sua maior comodidade.
                        </p>
                        <p>
                            <span className="bold white">
                                Buscamos seu aparelho
                            </span>{" "}
                            no seu endereço e{" "}
                            <span className="bold white">
                                entregamos pronto para uso
                            </span>
                            . Rápido, fácil e prático!
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--service__title">
                            Formate, Atualize ou Restaure Seu Sistema!
                        </span>
                        <span className="our--service__subtitle">.......</span>
                        <p>
                            Oferecemos formatação e instalação de Windows e
                            Linux, garantindo uma experiência de uso rápida e
                            segura, sem complicações.
                        </p>
                        <Image
                            src={"/icons/leva-traz.png"}
                            width={300}
                            height={300}
                            alt=""
                        />
                    </div>
                </div>
                <div className="our--services__row">
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Montagem de Computadores
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt=""
                        />
                        <p>
                            Quer um PC sob medida? Montamos máquinas ideais para
                            jogos, trabalho profissional ou uso cotidiano, tudo
                            com componentes de alta qualidade.
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Montagem de Computadores
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt=""
                        />
                        <p>
                            Quer um PC sob medida? Montamos máquinas ideais para
                            jogos, trabalho profissional ou uso cotidiano, tudo
                            com componentes de alta qualidade.
                        </p>
                    </div>
                    <div className="our--services__card">
                        <span className="our--services--title-2">
                            Montagem de Computadores
                        </span>
                        <Image
                            src={"/icons/pc-gamer.svg"}
                            width={300}
                            height={300}
                            alt=""
                        />
                        <p>
                            Quer um PC sob medida? Montamos máquinas ideais para
                            jogos, trabalho profissional ou uso cotidiano, tudo
                            com componentes de alta qualidade.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
