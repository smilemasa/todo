import { useState } from 'react';
import { Box, Typography, InputBase, IconButton, Paper, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTaskContext } from '../context/TaskContext';

export const ArchivePage = () => {
    const { tasks } = useTaskContext();
    const [searchQuery, setSearchQuery] = useState('');

    const completedTasks = tasks.filter(task => {
        const matchesStatus = task.completed;
        const query = searchQuery.toLowerCase();
        const matchesSearch = task.title.toLowerCase().includes(query) ||
            (task.description && task.description.toLowerCase().includes(query));
        return matchesStatus && matchesSearch;
    });

    return (
        <Box sx={{ p: '24px', pb: '80px' }}>
            {/* Search Bar */}
            <Paper
                component="form"
                sx={{
                    p: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#ffffff',
                    border: '2px solid transparent',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    mb: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-1px)',
                    },
                    '&:focus-within': {
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-2px)',
                    }
                }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: 'text.primary' }}
                    placeholder="タスクを検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Paper>

            {/* List */}
            <Stack spacing={2}>
                {completedTasks.map(task => (
                    <Paper
                        key={task.id}
                        elevation={0}
                        sx={{
                            p: '16px',
                            borderRadius: '16px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                        }}
                    >
                        {/* Header of card: Icon + Status + Date */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CheckCircleOutlineIcon sx={{ color: '#10b981', fontSize: '1.25rem' }} />
                                <Typography sx={{ color: '#10b981', fontWeight: 600, fontSize: '0.875rem' }}>完了</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                                {task.date || '2024/01/15'}
                            </Typography>
                        </Box>

                        {/* Title */}
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4 }}>
                            {task.title}
                        </Typography>

                        {/* Description */}
                        {task.description && (
                            <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.5 }}>
                                {task.description}
                            </Typography>
                        )}
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};
