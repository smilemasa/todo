import { useState } from "react";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { TaskList } from "../components/TaskList";
import { NewTaskDialog } from "../components/NewTaskDialog";
import type { TaskType } from "../components/TaskItem";

const INITIAL_TASKS: TaskType[] = [
    {
        id: "1",
        title: "チームミーティングの準備",
        description: "資料を3部印刷する",
        completed: true,
    },
    {
        id: "2",
        title: "週報を提出",
        description: "金曜日17:00まで",
        deadlineCurrent: "2/3",
        completed: false,
    },
    {
        id: "3",
        title: "プロジェクト企画書のレビュー",
        completed: false,
    },
    {
        id: "4",
        title: "クライアントへの提案書作成",
        tags: [
            { text: "今日", variant: "warning", icon: "clock" },
            { text: "高", variant: "warning" },
        ],
        completed: false,
    },
    {
        id: "5",
        title: "デザインレビューミーティング",
        date: "1月20日 14:00",
        dateCurrent: "1/4",
        completed: false,
    },
    {
        id: "6",
        title: "買い物リスト確認",
        completed: false,
    },
];

export const TasksPage = () => {
    const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const handleCreateTask = (task: Omit<TaskType, 'id' | 'completed'>) => {
        const newTask: TaskType = {
            ...task,
            id: Date.now().toString(),
            completed: false,
        };
        setTasks([newTask, ...tasks]);
    };

    return (
        <>
            <TaskList tasks={tasks} onToggle={toggleTask} />
            <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
            <NewTaskDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onCreate={handleCreateTask}
            />
        </>
    );
};
