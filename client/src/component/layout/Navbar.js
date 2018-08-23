import {Component} from "react";
import {Button, Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import {Link} from 'react-router-dom'

/*
* Neither Semantic UI nor Semantic UI React offer a responsive navbar
* */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

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
                                <Menu.Item as={Link} to='/' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as={Link} to='/work'>Work</Menu.Item>
                                <Menu.Item as={Link} to='/about'>About</Menu.Item>
                                <Menu.Item as={Link} to='/group'>Group</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as={Link} to='/login' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        {/*<HomepageHeading />*/}
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
