import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

export const Header = () => {
    const { uncompletedCount } = useTaskContext();
    const location = useLocation();

    const isSettings = location.pathname === '/settings';
    const isArchive = location.pathname === '/archive';
    const title = isArchive ? 'アーカイブ' : (isSettings ? '設定' : 'TODOリスト');

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
                    {title}
                </Typography>
                {!isSettings && !isArchive && (
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
                        {uncompletedCount}件
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
