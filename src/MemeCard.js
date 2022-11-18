import React from "react";
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'


function MemeCard({meme, onUpdateMeme, onDeleteMeme}) {

const {id, title, img_url, description, likes} = meme



function handleLikeClick() {
    const updateObj = {
      likes: meme.likes + 1,
    };

    fetch(`http://localhost:9292/memes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateMeme);
  }

  // function handleDeleteClick() {
  //   fetch(`http://localhost:9292/memes/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       onDeleteMeme(meme);
  //     });
  // }

return (

    <div className="individual-cards">
          <Card>
    <Image src= {img_url} alt = {title} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button as='div' labelPosition='left' >
      <Button icon onClick={handleLikeClick}>
        <Icon name='heart' />
        Like
      </Button >
      <Label as='a' basic pointing='left' >
        {likes}
      </Label>
    </Button>
    <Button animated='fade' basic color="red">
      <Button.Content visible>Delete</Button.Content>
      <Button.Content hidden>To the void!</Button.Content>
    </Button>
    </Card.Content>
  </Card>
    </div>


)



}

export default MemeCard