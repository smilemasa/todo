import type { Metadata } from "next";
import { ClientProviders } from "@/components/ClientProviders";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
    title: "Todo App",
    description: "A simple todo app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ClientProviders>
                    <Layout>
                        {children}
                    </Layout>
                </ClientProviders>
            </body>
        </html>
    );
}
