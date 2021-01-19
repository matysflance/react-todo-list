import { Sidebar } from '../Sidebar/Sidebar';
// import { AddTodo } from './Views/AddTodo/AddTodo';
import { TodoDashboard } from '../../Views/TodoDashboard/TodoDashboard';
import classes from './App.module.css';

export const App = () => {
  return (
    <main className={classes.wrapper}>
      <Sidebar />
      {/* <AddTodo /> */}
      <div className={classes.content}>
        <TodoDashboard />
      </div>
    </main>
  );
};
