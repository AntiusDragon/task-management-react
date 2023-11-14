import style from './Kanban.module.css';

export function Kanban() {
    return (
        <section id="kanban" data-color="3" className={style.todo} style={{gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className={style.column}>
                    <h2 className={style.title + ' normal underline'}>Backlog</h2>
                    <ul className={style.taskList}>
            <li id="task_1" className={style.taskCard}>
                <div className={style.taskActions}>
                    <button className={style.btn}>Delete</button>
                    {/* <button className="fa fa-trash"></button> */}
                </div>
                <div className={style.taskTitle}>aaa</div>
                <div className={style.taskDesc}>aaa</div>
                <div className={style.taskTags}>
                    <div className={style.tag} style={{color: '#333'}}>aaa</div>
                </div>
                <div className={style.taskDeadline}>aaa</div>
            </li></ul>
                </div>
                <div className={style.column}>
                    <h2 className={style.title + ' normal underline'}>Todo</h2>
                    <ul className={style.taskList}></ul>
                </div>
                <div className={style.column}>
                    <h2 className={style.title + ' normal underline'}>In progress</h2>
                    <ul className={style.taskList}></ul>
                </div>
                <div className={style.column}>
                    <h2 className={style.title + ' normal underline'}>Done</h2>
                    <ul className={style.taskList}></ul>
                </div>
        </section>
    );
}