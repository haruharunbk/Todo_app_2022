import React,{useState, useCallback, useRef} from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);

  const nextId = useRef(4); //ref를 사용해서 변수 담기 초기값이 4 //아이디 값을 4부터 시작하겠다

  const onInsert = useCallback( value => { //함수도 todoInsert에 내보내줘야된다.
    const todo ={
      id: nextId.current,
      text : value,
      checked: false,
    };
    setTodos(todos.concat(todo)); //todos의 맨마지막
    nextId.current += 1; //id값 +1씩해줘
  },[todos])//todos의 배열이 바뀔때 마다

  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos])

  const onToggle = useCallback( id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos])
  
  return (
    <>
      <div>Todo App 만들기</div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <div>Todo App을 만듭니다</div>
      </TodoTemplate>
    </>
  );
}

export default App;
