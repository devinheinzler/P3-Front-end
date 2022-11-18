import React, { useState } from "react";
import { Button, Form, Message, Checkbox } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"


function MemeForm() {
let history = useHistory()
    const [formData, setFormData] = useState({
        title: "",
        img_url: "",
        description: "",
        likes: 0
    })

    function handleChange(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
       
        fetch("http://localhost:9292/memes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then(history.push("/memes"));
    }

    
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Input meme title...'
          value={formData.title}
          onChange={handleChange}
          name = "title"
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder='Add a description!'
          value={formData.description}
          name="description"
          onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='Add the image URL here!'
          value={formData.img_url}
          name="img_url"
          onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I hereby confirm that this meme is in fact dope' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
        
        
        )
    }
    
    export default MemeForm
    
    // <form onSubmit={handleSubmit}>
    
    //     <label>Instructions:</label>
    //     <input type="textbox" value={formData.title} name="Insert Title Here" placeholder="Insert title here" onChange={handleChange}></input>
    //     <input type="textbox" value={formData.img_url} name="img_url" placeholder="Please add image URL" onChange={handleChange}></input>
    //     <input type="textbox" value={formData.description} name="description" placeholder="Add meme description" onChange={handleChange}></input>
    //     <button type="submit">Submit Form</button>
    // </form>