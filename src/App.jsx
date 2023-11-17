import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { useState } from "react";

const data = [
    {
        id: 1,
        isDelete: true,
        columnIndex: 1,
        title: 'HTML',
        description: 'Task description',
        deadline: '2023',
        tags: ['html', 'font', 'color'],
    },
    {
        id: 2,
        isDelete: false,
        columnIndex: 0,
        title: 'CSS',
        description: 'Task description',
        deadline: '2023',
        tags: ['css', 'font', 'color'],
    },
];

function App() {
  const [usedTaskId, setUsedTaskId] = useState(3);
  const [isAsideVisible, setAsideVisibility] = useState(false);
  const [tasks, setTask] = useState(data);

  function updateAsideVisibility(newVisibility) {
    setAsideVisibility(newVisibility);
  }
  function addTask(task) {
    setTask(prev => [
      ...prev,
      {
        id: usedTaskId + 1,
        isDelete: false,
        ...task
      }
      ]);  
    setAsideVisibility(false);
    setUsedTaskId(usedTaskId + 1);
  }

  function removeTask(taskId) {
    setTask(prev => prev.map(task => task.id !== taskId
      ? task
      : {
        ...task,
        isDelete: true,
      }))
  }

  return (
    <>
      <Header updateAsideVisibility={updateAsideVisibility}/>

      <Main tasks={tasks.filter(task => !task.isDelete)}
      isAsideVisible={isAsideVisible}
      addTask={addTask}
      removeTask={removeTask} />
      
      <Footer />
    </>
  );
}

export default App;
