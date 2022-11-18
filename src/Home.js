import React from "react";
import {Menu, Header, Icon, Image, Button} from 'semantic-ui-react'
import './Home.css'
function Home(){


return (
        <div>
                <div className="menu-div">
                <Button  animated>
      <Button.Content visible>Home</Button.Content>
      <Button.Content hidden>
        <Icon name='home' />
      </Button.Content>
    </Button>
    <Button animated>
      <Button.Content visible>Memes</Button.Content>
      <Button.Content hidden>
        <Icon name='smile outline' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Add your own!</Button.Content>
      <Button.Content hidden>Let's do it!</Button.Content>
    </Button>
                </div>
                <div className="header-div">
                <Header as='h2' icon textAlign='center'>
                        <Icon name='chess king' circular />
                                <Header.Content>Welcome to MemeKing!</Header.Content>
                </Header>
                <Image
                        centered
                        size='large'
                        src='https://pbs.twimg.com/media/EUXOgVHUUAERTe6.jpg'
                />
                </div>
        </div>
)
}

export default Home