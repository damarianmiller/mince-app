import { Nunito } from "next/font/google";
const font = Nunito({
    subsets: ["latin"],
    variable: "--font-theme",
});

import "@/styles/global.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
    metadataBase: new URL("https://localhost:3000"),
    title: { 
        default: "Mince - Pantry Assistant",
        template: "%s | Mince",
    },
    description: "Mince is a pantry assistant that helps you keep track of your ingredients and recipes.",
    openGraph: {
        title: 'Mince - Pantry Assistant',
        description: 'Mince is a pantry assistant that helps you keep track of your ingredients and recipes.',
        url: 'https://localhost:3000',
        siteName: 'Mince',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={font.variable}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}