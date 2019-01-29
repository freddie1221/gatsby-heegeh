import React from "react"
import Textarea from 'react-textarea-autosize'
import styles from "./contribute.module.css"
import Spinner from "./spinner"

class Contribute extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      email: "",
      pending: false,
      success: false,
    }
    this.success = this.success.bind(this)
  }
  
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ pending: true })
    const listId = process.env.GATSBY_INBOX_LISTID
    const token = process.env.GATSBY_TOKEN
    const key = process.env.GATSBY_KEY
    const desc = this.state.description
    const name = this.state.name
    const path = `https://api.trello.com/1/cards?`
    const url = `${path}name=${name}&desc=${desc}&idList=${listId}&key=${key}&token=${token}`
    fetch(url, { method: "POST" }).then(r => { setTimeout(this.success, 1000)})
  }
  
  success() {
    this.setState({ pending: false, success: true })
  }

  isComplete() {
    if (this.state.email && this.state.description && this.state.name) {
      return false
    } else {
      return true
    }
  }

  render() {
      return (
        <div className={styles.container}>
          
          {this.state.pending ? <Spinner /> 
          : this.state.success ? <h2>Success</h2> 
          : <form className={styles.main} onSubmit={this.handleSubmit}>
            <div className={styles.input}>
              <input
                type="text"
                name="name"
                placeholder="Title"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <Textarea
                minRows={5}
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </div>
              <div className={styles.email}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <button 
                disabled={this.isComplete()}
                type="submit">Submit
              </button>
          </form>
          }
        </div>
      )
    }
  }

export default Contribute