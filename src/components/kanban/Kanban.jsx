import { KanbanColumn } from './KanbanColumn';
import style from './Kanban.module.css';
import { TaskCard } from './TaskCard';

export function Kanban() {
    const data = [
        {
            id: 1,
            columnIndex: 1,
            title: 'HTML',
            description: 'Task description',
            deadline: '2023',
            tags: ['html', 'font', 'color'],
        },
        {
            id: 2,
            columnIndex: 0,
            title: 'CSS',
            description: 'Task description',
            deadline: '2023',
            tags: ['css', 'font', 'color'],
        },
    ];

    return (
        <section id="kanban" data-color="3" className={style.todo} style={{gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <KanbanColumn tasks={data.filter(task => task.columnIndex === 0)} title="Backlog" />
                <KanbanColumn tasks={data.filter(task => task.columnIndex === 1)} title="Todo" />
                <KanbanColumn tasks={data.filter(task => task.columnIndex === 2)} title="In progress" />
                <KanbanColumn tasks={data.filter(task => task.columnIndex === 3)} title="Done" />
        </section>
    );
}