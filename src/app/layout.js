import { Inter } from "@next/font/google";
import "./globals.css";

// Configuração da fonte Inter
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Tech Solution",
    description: "Sua satisfação é nossa prioridade!",
};

// Componente Header
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">TechSolution</h1>
                <nav className="header-nav">
                    <a href="/">Início</a>
                    <a href="/#services">Serviços</a>
                </nav>
            </div>
        </header>
    );
}

// Componente Footer
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2025 TechSolution - Todos os direitos reservados</p>
                <div className="footer-contact">
                    <p>Entre em contato: (45) 9 99930-9809</p>
                    <a
                        href="http://wa.me/5545999309809?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20um%20orçamento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br" className={inter.variable}>
            <body className="body-container">
                <div className="page-container">
                    <Header />
                    <main className="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
