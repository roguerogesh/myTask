const TaskItem = props => {
  const {taskDetails} = props
  const {taskText, tags} = taskDetails

  return (
    <li>
      <p>{taskText}</p>
      <p>{tags}</p>
    </li>
  )
}

export default TaskItem
