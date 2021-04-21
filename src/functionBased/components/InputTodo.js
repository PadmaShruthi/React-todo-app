import React, { useState } from "react"
import {TiTick} from "react-icons/ti"
//changed to func. comp
const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })
//here it takes the old input overrides it with new updated state
  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
  <TiTick
    style={{ color: "#0ee848", fontSize: "50px", marginTop: "2px" }}
  />
</button>
    </form>
  )
}

export default InputTodo