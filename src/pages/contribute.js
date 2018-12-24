import React from "react"
import Layout from "../components/layout"
import Textarea from 'react-textarea-autosize'


export default () => {

  return (
    <Layout>
      <h1>Contribute</h1>
      <p>Add your contribution for review</p>
      <form>
        
        <Textarea></Textarea>
        
      </form>
    </Layout>
  )
}