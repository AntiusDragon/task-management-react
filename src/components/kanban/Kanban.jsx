import { KanbanColumn } from './KanbanColumn';
import style from './Kanban.module.css';
import { TaskCard } from './TaskCard';
import { useState } from 'react';

export function Kanban() {
    const [title, setTitle] = useState(''); // "title" kintamasis, "setTitle" iskvieciama funkcija kas atnaujintu "title"
    // let newColumnTitle = '';
    // const columns = ['Backlog', 'Todo', 'In progress', 'Done'];
    const columns = ['Backlog', 'Todo'];
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
    
    function newColumnSubmit(event) {
        event.preventDefault();
        columns.push(title);
        console.log('Submit:',  title, columns);
    }
    
    function inputUpdate(event) {
       setTitle(event.target.value);
    }
    

    return (
        <section id="kanban" data-color="3" className={style.todo} style={{gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {columns.map((columns, idx) => (
                    <KanbanColumn tasks={data.filter(task => task.columnIndex === idx)} title={columns} />
                ))}
                
                <form className={style.newColumn}>
                    <input type="text" value={title} onChange={inputUpdate} placeholder='Naujas stulpelis...' />

                    <button type="submit" onClick={newColumnSubmit}>Prideti</button>
                </form>
        </section>
    );
}