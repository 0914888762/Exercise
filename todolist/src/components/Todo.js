import React, { useState } from 'react'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo }) => {

//Trong hàm này, ta sử dụng phương thức map() của mảng todos để tạo ra một mảng mới, trong đó mỗi phần tử được chuyển đổi thành một đoạn mã JSX (JavaScript XML). Đoạn mã JSX này sẽ tạo ra một <div> chứa nội dung của từng phần tử trong mảng todos.

//Trong phần tử <div> này, thuộc tính className được xác định dựa trên giá trị của todo.isComplete. Nếu todo.isComplete là true, thì className sẽ được đặt là 'todo-row complete', ngược lại nếu todo.isComplete là false thì className sẽ là 'todo-row'. Điều này cho phép chúng ta áp dụng CSS khác nhau cho các phần tử đã hoàn thành và chưa hoàn thành.

//Thuộc tính key được sử dụng để xác định một giá trị duy nhất cho mỗi phần tử trong mảng. Điều này giúp React xác định phần tử nào đã thay đổi trong quá trình cập nhật UI.

//Trong phần tử con <div> bên trong <div> cha, chúng ta sử dụng thuộc tính key một lần nữa để xác định todo.id là giá trị duy nhất cho phần tử con này. Đồng thời, ta gắn sự kiện onClick để khi người dùng click vào phần tử này, hàm completeTodo() được gọi với todo.id là tham số truyền vào.

//Cuối cùng, người dùng sẽ nhìn thấy nội dung của todo.text trong mỗi phần tử <div> con.

//Hàm sẽ trả về danh sách các phần tử đã được tạo ra trong JSX.

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div>
  ));
}

export default Todo;