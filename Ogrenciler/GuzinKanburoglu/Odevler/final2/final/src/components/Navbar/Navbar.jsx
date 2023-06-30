import React from 'react'
import { Item, Nav, Input, Button, FriendParagraph, FunParagraph, HavingParagraph, LeftSide, RightSide, Slide } from './navbarStyle'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <Nav>
                <Item>Home</Item>
                <Item>Category</Item>
                <Item>About</Item>
                <Item>Contact</Item>
                <Input className="input" placeholder='Search something here!'></Input>
                <Link to={`/signup`}><Button>Sign in</Button></Link> 
                <Link to={`/login`}><Button>Login</Button></Link> 
            </Nav>
            <Slide className='d-flex'>
                <LeftSide>
                    <FriendParagraph>
                        One More Friend
                    </FriendParagraph>
                    <FunParagraph>Thousands More Fun!</FunParagraph>
                    <HavingParagraph>
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                    </HavingParagraph>
                    <div className='d-flex justify-content-center gap-5'>
                    <Button>View Intro</Button>
                    <Button>Explore Now</Button>
                    </div>
                </LeftSide>

                <RightSide>

                </RightSide>
            </Slide>
        </div>
    )
}

export default Navbar