import type { Metadata } from "next"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter"
import { ClientProviders } from "../feature/context/ClientProviders"
import { Layout } from "../feature/components/Layout"

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app",
  appleWebApp: {
    capable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ClientProviders>
            <Layout>{children}</Layout>
          </ClientProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
