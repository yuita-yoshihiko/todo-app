// src/TodoList.jsx
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo} // 更新関数を渡す
        />
      ))}
    </div>
  );
}

export default TodoList;
