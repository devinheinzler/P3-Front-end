import React, { useState } from "react";
import { Button, Form, Message, Checkbox } from 'semantic-ui-react'

function MemeForm() {

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
console.log(formData)
        // const submittedMeme = {
        //     ...formData
        
        
        fetch("http://localhost:9292/memes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then(console.log);
    }
    
    
    
    
    
    return (

        <form onSubmit={handleSubmit}>
        
            <label>Instructions:</label>
            <input type="textbox" value={formData.title} name="Insert Title Here" placeholder="Insert title here" onChange={handleChange}></input>
            <input type="textbox" value={formData.img_url} name="img_url" placeholder="Please add image URL" onChange={handleChange}></input>
            <input type="textbox" value={formData.description} name="description" placeholder="Add meme description" onChange={handleChange}></input>
            <button type="submit">Submit Form</button>
        </form>
        
        
        )
    }
    
    export default MemeForm
    