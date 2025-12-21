import { Box } from "@mui/material";
import { TaskItem } from "./TaskItem";
import type { TaskType } from "../types";

type TaskListProps = {
    tasks: TaskType[];
    onToggle: (id: string) => void;
};

export const TaskList = ({ tasks, onToggle }: TaskListProps) => {
    return (
        <Box sx={{ px: 2, pt: 2, pb: '140px' }}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
        </Box>
    );
};
