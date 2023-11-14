import style from './Form.module.css';

export function Form() { 
    return (
        <form id="taskForm" className={style.form}>
            <div className={style.formRow}>
                <label className={style.formLabel} htmlFor="title">Title</label>
                <input id="title" className={style.formInput} type="text" name="title" required />
            </div>
            <div className={style.formRow}>
                <label className={style.formLabel} htmlFor="desc">Description</label>
                <textarea id="desc" className={style.textarea} name="description"></textarea>
            </div>
            <div className={style.formRow}>
                <label className={style.formLabel} htmlFor="deadline">Deadline</label>
                <input id="deadline" className={style.formInput} type="text" name="deadline" />
            </div>
            <div className={style.formRow}>
                <label className={style.formLabel} htmlFor="tags">Tags</label>
                <input id="tags" className={style.formInput} type="text" name="tags" />
            </div>
            <div className={style.formRow}>
                <button className={style.btn} type="submit">Create task</button>
            </div>
        </form>
    );
}