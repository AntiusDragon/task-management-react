import { KanbanColumn } from './KanbanColumn';
import style from './Kanban.module.css';
// import { TaskCard } from './TaskCard';
import { useState } from 'react';

export function Kanban({ tasks, removeTask }) {
    const [title, setTitle] = useState(''); // "title" kintamasis, "setTitle" iskvieciama funkcija kas atnaujintu "title"
    const  [columns, setColumns] = useState(['Backlog', 'Todo']);
    // let newColumnTitle = '';
    // const columns = ['Backlog', 'Todo', 'In progress', 'Done'];
    // const columns = ['Backlog', 'Todo'];
    
    function newColumnSubmit(event) {
        event.preventDefault();
        // columns.push(title);
        setColumns(prev => [...prev, title]);
        setTitle('');
        // console.log('Submit:',  title, columns);
    }
    
    function inputUpdate(event) {
       setTitle(event.target.value);
    }
    

    return (
        <section id="kanban" className={style.todo} style={{gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)` }}>
                {columns.map((columns, idx) => (
                    <KanbanColumn
                        key={idx}
                        tasks={tasks.filter(task => task.columnIndex === idx)}
                        title={columns} 
                        removeTask={removeTask} />
                ))}
                
                <form className={style.newColumn}>
                    <input type="text" value={title} onChange={inputUpdate} placeholder='Naujas stulpelis...' />

                    <button type="submit" onClick={newColumnSubmit}>Prideti</button>
                </form>
        </section>
    );
}