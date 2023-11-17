import { Form } from '../form/Form';
import style from './Aside.module.css';

export function Aside({ addTask }) {
    return (
        <aside id="aside" className={style.aside}>
            <div className={style.asideBg}></div>
            <div className={style.asideContainer}>
                <header className={style.asideHeader}>
                    <h2 className={style.asideTitle}>Add task</h2>
                    <button type="button" className="fa faTimes"></button>
                    {/* <button type="button" className="fa faTimes"></button> */}
                </header>
                <div className={style.asideContent}>
                    <Form addTask={addTask}/>
                </div>
            </div>
        </aside>
    );
}