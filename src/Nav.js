import React from "react";
import {Menu, Header, Icon, Image, Button} from 'semantic-ui-react'
import {Link, withRouter} from "react-router-dom"
import './Home.css'


function Nav() {



    return(
        <div>
                            <div className="menu-div">
                <Button
                as = "a" href='/'
                name = 'home'
                animated>
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                <Icon name='home' />
                </Button.Content>
                </Button>
                <Button 
                as = "a" href='/memes'
                name = "memes" 
                animated>
                <Button.Content visible>Memes</Button.Content>
                <Button.Content hidden>
                <Icon name='smile outline' />
                </Button.Content>
                </Button>
                <Button 
                as = "a" href='/MemeForm'
                name = "MemeForm" 
                animated>
                <Button.Content visible>Add your own!</Button.Content>
                <Button.Content hidden>
                <Icon name='plus' />
                </Button.Content>
                </Button>
                </div>
        </div>
    )
}

export default Nav