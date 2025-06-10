import "./Components/Question/Question"
import Otp from "./Components/Otp/Otp"
import TodoList from "./Components/TodoList/TodoList"
export default function App() {
  return (
    <div>
      {/* <Otp onSubmit={otp => console.log(otp)}/> */}
      <TodoList />
    </div>
  )
}