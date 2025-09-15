// TodoListコンポーネントをインポート
import TodoList from './TodoList';

function App() {
  const todos = [
    {
      id: 1,
      text: "Reactの基礎を学ぶ",
      completed: true
    },
    {
      id: 2,
      text: "Todoアプリを作成する",
      completed: false
    },
    {
      id: 3,
      text: "JavaScriptの復習をする",
      completed: true
    },
    // 新しいTodoを追加
    {
      id: 4,
      text: "Tailwind CSSでスタイリング",
      completed: false
    },
    {
      id: 5,
      text: "コンポーネント設計を学ぶ",
      completed: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo アプリ
        </h1>

        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
