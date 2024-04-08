const TagItem = props => {
  const {tagDetails, onTagButton} = props

  const onClickButton = () => {
    onTagButton(tagDetails.displayText)
  }

  return (
    <li>
      <button onClick={onClickButton}>{tagDetails.displayText}</button>
    </li>
  )
}

export default TagItem
