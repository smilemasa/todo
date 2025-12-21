import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const SettingsPage = () => {
    const menuItems = [
        {
            text: 'ヘルプ',
            icon: <HelpOutlineIcon />,
            color: 'inherit'
        },
        {
            text: 'アプリについて',
            icon: <InfoOutlinedIcon />,
            color: 'inherit'
        },
        {
            text: 'ログアウト',
            icon: <LogoutIcon sx={{ color: '#ef4444' }} />, // red-500
            color: '#ef4444',
            divider: true // Special flag for separator if needed, but MUI Paper usually handles grouping
        },
    ];

    return (
        <Box sx={{ p: '24px' }}>
            {/* Section Label */}
            <Typography
                variant="body2"
                sx={{
                    mb: 1,
                    color: 'text.secondary',
                    fontSize: '14px'
                }}
            >
                その他
            </Typography>

            {/* Menu List */}
            <Paper
                elevation={0}
                sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <List disablePadding>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={item.text}
                            disablePadding
                            divider={index !== menuItems.length - 1}
                        >
                            <ListItemButton sx={{ py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: 500,
                                            color: item.color === 'inherit' ? 'text.primary' : item.color
                                        }
                                    }}
                                />
                                <ChevronRightIcon sx={{ color: '#9ca3af' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};
