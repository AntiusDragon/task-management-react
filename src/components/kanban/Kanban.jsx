import './Kanban.css'

export function Kanban() {
    return (
        <section id="kanban" data-color="3" className="todo" style={{gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="column">
                    <h2 className="title">Backlog</h2>
                    <ul className="task-list">
            <li id="task_1" className="task-card">
                <div className="task-actions">
                    <button className="fa fa-trash"></button>
                </div>
                <div className="task-title">aaa</div>
                <div className="task-desc">aaa</div>
                <div className="task-tags"><div className="tag" style={{color: '#333'}}>aaa</div></div>
                <div className="task-deadline">aaa</div>
            </li></ul>
                </div>
                <div className="column">
                    <h2 className="title">Todo</h2>
                    <ul className="task-list"></ul>
                </div>
                <div className="column">
                    <h2 className="title">In progress</h2>
                    <ul className="task-list"></ul>
                </div>
                <div className="column">
                    <h2 className="title">Done</h2>
                    <ul className="task-list"></ul>
                </div>
        </section>
    );
}