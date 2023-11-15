import style from './Kanban.module.css';
import { Tag } from './Tag';

export function TaskCard({ data }) {
    const { title, description, deadline, tags } = data;
    // const tagsList = [
    //     <Tag title="low" />,
    //     <Tag title="medium" />,
    //     <Tag title="high" />,
    // ];

    // const tagsList = [];
    
    // for (const tag of tags) {
        //     tagsList.push(<Tag title={tag} />);
        // }
        
    // const tagsList = tags.map(tag => <Tag title={tag} />);

    return (
        <li id="task_1" className={style.taskCard}>
            <div className={style.taskActions}>
                <button className={style.btn + ' fa fa-trash'}>Delete</button>
            </div>
            <div className={style.taskTitle}>{title}</div>
            <div className={style.taskDesc}>{description}</div>
            <div className={style.taskTags}>
                {tags.map(tag => <Tag title={tag} />)}
            </div>
            <div className={style.taskDeadline}>{deadline}</div>
        </li>
    );
}