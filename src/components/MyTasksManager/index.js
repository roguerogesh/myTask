import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import {
  AppContainer,
  CreateTaskContainer,
  Heading,
  FormContainer,
  LabelText,
  InputElement,
  SelectElement,
  AddButton,
  TagsContainer,
  Headings,
  ButtonsContainer,
  TaskListContainer,
} from './styledComponents'

class MyTasksManager extends Component {
  state = {
    taskText: '',
    tags: '',
    taskLists: [],
    activeTag: '',
  }

  onChangeTask = event => {
    this.setState({taskText: event.target.value})
  }

  onChangeTags = event => {
    this.setState({tags: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()

    const {taskText, tags} = this.state

    const newTask = {
      id: uuidv4(),
      taskText,
      tags,
    }

    this.setState(prevState => ({
      taskLists: [...prevState.taskLists, newTask],
      taskText: '',
      tags: '',
    }))
  }

  onTagButton = displayText => {
    const {taskLists} = this.state
    const updatedList = taskLists.filter(each => each.tags === displayText)

    this.setState({taskLists: updatedList, activeTag: displayText})
  }

  render() {
    const {taskText, tags, taskLists, activeTag} = this.state
    const {tagsList} = this.props

    return (
      <AppContainer>
        <CreateTaskContainer>
          <Heading>Create a task!</Heading>
          <FormContainer onSubmit={this.onAddTask}>
            <LabelText htmlFor="task">Task</LabelText>
            <InputElement
              id="task"
              type="text"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
              value={taskText}
            />
            <LabelText htmlFor="tags">Tags</LabelText>
            <SelectElement
              id="tags"
              onChange={this.onChangeTags}
              name="tags"
              value={tags}
            >
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              ))}
            </SelectElement>
            <AddButton type="submit">Add Task</AddButton>
          </FormContainer>
        </CreateTaskContainer>
        <TagsContainer>
          <Headings>Tags</Headings>
          <ButtonsContainer>
            {tagsList.map(eachTag => (
              <TagItem
                tagDetails={eachTag}
                key={eachTag.optionId}
                onTagButton={this.onTagButton}
              />
            ))}
          </ButtonsContainer>
          <Headings>Tasks</Headings>
          {taskLists.length === 0 ? (
            <p>No Tasks Added Yet</p>
          ) : (
            <TaskListContainer>
              {taskLists.map(eachTask => (
                <TaskItem taskDetails={eachTask} key={eachTask.id} />
              ))}
              {activeTag && <p>Tasks with Tag: {activeTag}</p>}
            </TaskListContainer>
          )}
        </TagsContainer>
      </AppContainer>
    )
  }
}

export default MyTasksManager
