import React from "react"
import Layout from "../components/layout"
import Textarea from 'react-textarea-autosize'


class Contribute extends React.Component {

  constructor(props){
    super(props)
    this.state = {title: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.title});
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.title);
    e.preventDefault();
  }

  render() {
    return (
      <Layout>
        <h1>Contribute</h1>
        <p>Add your contribution for review{}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value="" onChange={this.handleChange} />
          <br/><br/>
          <Textarea 
            placeholder="Description"
          /><br/><br/>
          <input type="submit" value="Submit" />
          
        </form>
      </Layout>
    )
  }
}

export default Contribute