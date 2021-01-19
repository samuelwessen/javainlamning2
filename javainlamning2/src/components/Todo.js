import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {

    const isCompletedHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, isCompleted: !item.isCompleted
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }



    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${ todo.isCompleted ? 'text-gray' : 'is-active' }`}>
                    <div className="name">{todo.name}</div>
                    <div className="description">{todo.description}</div>
                </div>                
                <div>
                    <i onClick={isCompletedHandler} className={ `fas fa-check cp ${ todo.isCompleted ? 'is-completed' : 'is-active' }`}></i>
                    <i onClick={deleteHandler} className="fas fa-trash cp"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Todo
