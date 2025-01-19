import { Inter } from "@next/font/google";

import "./globals.css";

export const metadata = {
    title: "Tech Solution",
    description: "Sua satisfação é nossa prioridade!",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
