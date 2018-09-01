import {Component} from "react";
import {Button, Container, Image, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import {Link} from 'react-router-dom'

/*
* Neither Semantic UI nor Semantic UI React offer a responsive navbar
* */
class DesktopContainer extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        // style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                {/*<Menu.Item>*/}
                                    {/*<Image src='/logo.png' size='tiny'/>*/}
                                {/*</Menu.Item>*/}
                                <Menu.Item name='home'
                                           active={activeItem === 'home'}
                                           onClick={this.handleItemClick}
                                           as={Link}
                                           to='/'>
                                    Home
                                </Menu.Item>
                                <Menu.Item name='work'
                                           active={activeItem === 'work'}
                                           onClick={this.handleItemClick}
                                           as={Link}
                                           to='/work'>
                                    Work
                                </Menu.Item>
                                <Menu.Item name='about' active={activeItem === 'about'}
                                           onClick={this.handleItemClick}
                                           as={Link}
                                           to='/about'>
                                    About
                                </Menu.Item>
                                <Menu.Item name='group'
                                           active={activeItem === 'group'}
                                           onClick={this.handleItemClick}
                                           as={Link} to='/group'>
                                    Group
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as={Link} to='/login' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as={Link} to='/signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}


export default DesktopContainer;
