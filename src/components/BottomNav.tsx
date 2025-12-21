import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { TaskAlt, CalendarMonth, Archive, Settings } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getValue = () => {
        if (location.pathname === '/schedule') return 1;
        if (location.pathname === '/archive') return 2;
        if (location.pathname === '/settings') return 3;
        return 0;
    };

    const value = getValue();

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_, newValue) => {
                    switch (newValue) {
                        case 0: navigate('/'); break;
                        case 1: navigate('/schedule'); break;
                        case 2: navigate('/archive'); break;
                        case 3: navigate('/settings'); break;
                    }
                }}
                sx={{
                    height: 60,
                    maxWidth: '448px', // Match the Layout maxWidth
                    mx: 'auto',
                    '& .MuiBottomNavigationAction-root': {
                        color: 'text.secondary',
                        '&.Mui-selected': {
                            color: 'primary.main',
                        }
                    }
                }}
            >
                <BottomNavigationAction label="タスク" icon={<TaskAlt />} />
                <BottomNavigationAction label="予定" icon={<CalendarMonth />} />
                <BottomNavigationAction label="アーカイブ" icon={<Archive />} />
                <BottomNavigationAction label="設定" icon={<Settings />} />
            </BottomNavigation>
        </Paper>
    );
};
