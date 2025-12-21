import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";

export const Header = () => {
    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: '20px !important' }}>
                <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
                    TODOリスト
                </Typography>
                <Chip
                    label="5件"
                    size="small"
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 700,
                        opacity: 0.1, // Wait, the design had light background. 
                        // Design: blue-50 bg, blue-600 text.
                        '& .MuiChip-label': { px: 1.5 },
                    }}
                />
                {/* Correcting Chip style to match design */}
                <Box
                    component="span"
                    sx={{
                        bgcolor: '#eff6ff', // blue-50 
                        color: '#2563eb',   // blue-600
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        borderRadius: '9999px',
                        px: 1.5,
                        py: 0.5
                    }}
                >
                    5件
                </Box>
            </Toolbar>
        </AppBar>
    );
};
