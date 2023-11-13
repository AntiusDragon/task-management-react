import './Aside.css'

export function Aside() {
    return (
        <aside id="aside" className="aside">
            <div className="aside-bg"></div>
            <div className="aside-container">
                <header className="aside-header">
                    <h2 className="aside-title">Add task</h2>
                    <button type="button" className="fa fa-times"></button>
                </header>
                <div className="aside-content">
                    <form id="task_form" className="form">
                        <div className="form-row">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input id="title" className="form-input" type="text" name="title" required />
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="desc">Description</label>
                            <textarea id="desc" className="textarea" name="description"></textarea>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="deadline">Deadline</label>
                            <input id="deadline" className="form-input" type="text" name="deadline" />
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="tags">Tags</label>
                            <input id="tags" className="form-input" type="text" name="tags" />
                        </div>
                        <div className="form-row">
                            <button className="form-btn" type="submit">Create task</button>
                        </div>
                    </form>
                </div>
            </div>
        </aside>
    );
}