import React from "react"
import Layout from "../components/layout"
import Textarea from 'react-textarea-autosize'


class Contribute extends React.Component {
  state = {
    name: "",
    description: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
// ? Not too sure what target does / is needed for
    this.setState({
      [name]: value,
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    const listId = process.env.GATSBY_LISTID
    const token = process.env.GATSBY_TOKEN
    const key = process.env.GATSBY_KEY
    const desc = this.state.description
    const name = this.state.name
    const path = `https://api.trello.com/1/cards?`
    const url = `${path}name=${name}&desc=${desc}&idList=${listId}&key=${key}&token=${token}`
    
    fetch(url, { method: "POST" })
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <Textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default Contribute