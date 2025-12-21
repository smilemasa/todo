import { Card, Checkbox, IconButton, Typography, Box, Stack, Chip, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Check, MoreVert, AccessTime, EditOutlined, ContentCopy, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

export type TaskType = {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    deadlineCurrent?: string;
    date?: string;
    dateCurrent?: string;
    tags?: Array<{
        text: string;
        variant: "warning" | "default";
        icon?: "clock";
    }>;
    completed: boolean;
};

type TaskItemProps = {
    task: TaskType;
    onToggle: (id: string) => void;
};

export const TaskItem = ({ task, onToggle }: TaskItemProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (event?: React.MouseEvent<HTMLElement>) => {
        if (event) event.stopPropagation();
        setAnchorEl(null);
    };

    return (
        <Card
            elevation={0}
            sx={{
                mb: 2,
                borderRadius: 4,
                border: '1px solid',
                borderColor: task.completed ? 'transparent' : 'divider',
                bgcolor: 'background.paper',
                width: '100%',
            }}
        >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    icon={
                        <Box sx={{
                            width: 24,
                            height: 24,
                            borderRadius: 2,
                            border: '2px solid',
                            borderColor: 'grey.300',
                            bgcolor: 'background.paper'
                        }} />
                    }
                    checkedIcon={
                        <Box sx={{
                            width: 24,
                            height: 24,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Check sx={{ fontSize: 18, color: 'white' }} />
                        </Box>
                    }
                    sx={{ p: 0.5, mt: 0 }}
                />

                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            lineHeight: 1.4,
                            mb: 0.5,
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'text.secondary' : 'text.primary',
                        }}
                    >
                        {task.title}
                    </Typography>

                    {task.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {task.description}
                        </Typography>
                    )}

                    <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center">
                        {task.deadline && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', fontSize: '0.875rem' }}>
                                <span>{task.deadline}</span>
                                {task.deadlineCurrent && (
                                    <Box component="span" sx={{ bgcolor: '#eff6ff', color: '#2563eb', px: 1, borderRadius: 99, fontSize: '0.75rem', fontWeight: 700 }}>
                                        {task.deadlineCurrent}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {task.date && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', fontSize: '0.875rem' }}>
                                <span>{task.date}</span>
                                {task.dateCurrent && (
                                    <Box component="span" sx={{ bgcolor: '#eff6ff', color: '#2563eb', px: 1, borderRadius: 99, fontSize: '0.75rem', fontWeight: 700 }}>
                                        {task.dateCurrent}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {task.tags && task.tags.map((tag, i) => (
                            <Chip
                                key={i}
                                icon={tag.icon === 'clock' ? <AccessTime sx={{ fontSize: '14px !important' }} /> : undefined}
                                label={tag.text}
                                size="small"
                                sx={{
                                    height: 24,
                                    fontWeight: 700,
                                    fontSize: '0.75rem',
                                    bgcolor: tag.variant === "warning" ? '#ffedd5' : '#f3f4f6', // orange-100 or gray-100
                                    color: tag.variant === "warning" ? '#ea580c' : '#4b5563',   // orange-600 or gray-600
                                    '& .MuiChip-icon': {
                                        color: 'inherit',
                                        ml: 0.5,
                                        mr: -0.5
                                    }
                                }}
                            />
                        ))}
                    </Stack>
                </Box>

                <IconButton
                    size="small"
                    sx={{ mt: -0.5, mr: -1, color: 'text.secondary' }}
                    onClick={handleMenuOpen}
                >
                    <MoreVert />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleMenuClose()}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        elevation: 3,
                        sx: {
                            borderRadius: 3,
                            minWidth: 180,
                            minHeight: 180,
                            mt: 1,
                            '& .MuiList-root': {
                                // padding: 0,
                            }
                        }
                    }}
                >
                    <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                            <EditOutlined fontSize="small" sx={{ color: 'text.secondary' }} />
                        </ListItemIcon>
                        <ListItemText primary="編集" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                            <ContentCopy fontSize="small" sx={{ color: 'text.secondary' }} />
                        </ListItemIcon>
                        <ListItemText primary="複製" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                            <DeleteOutline fontSize="small" color="error" />
                        </ListItemIcon>
                        <ListItemText
                            primary="削除"
                            primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: 'error.main' }}
                        />
                    </MenuItem>
                </Menu>
            </Box>
        </Card>
    );
};
