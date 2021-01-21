import Todo from './Todo';

const List = (props) => {
    const mappedTodos = props.list.map((el, i) => {
        return <Todo key={i} item={el}/>
    })

    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default List;