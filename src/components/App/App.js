import { Sidebar } from '../Sidebar/Sidebar';
// import { AddTodo } from './Views/AddTodo/AddTodo';
import { TodoDashboard } from '../../Views/TodoDashboard/TodoDashboard';
import { Wrapper, ContentWrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>
        {/* <AddTodo /> */}
        <TodoDashboard />
      </ContentWrapper>
    </Wrapper>
  );
};
