"use client";

import { Box, Container, Paper } from "@mui/material";
import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Container maxWidth="xs" disableGutters>
                <Paper
                    elevation={3}
                    sx={{
                        minHeight: '100vh',
                        position: 'relative',
                        bgcolor: 'background.default',
                        pb: '70px', // Space for BottomNav
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Header />
                    <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 0 }}>
                        {children}
                    </Box>
                    <BottomNav />
                </Paper>
            </Container>
        </Box>
    );
};
