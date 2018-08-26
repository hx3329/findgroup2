import React from 'react'
import { Icon,Button, Form, Grid, Image, Message, Segment,Divider } from 'semantic-ui-react'
import axios from 'axios'


//style
const divStyle = {
    margin: '20px',
};

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }
    //onChange of email
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    //onchange of Password
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    //using pop to check the input,
    signIn(){
        //POST
        axios.post('/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div style={divStyle}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        {/*<Header as='h1' color='blue' textAlign='center' size='massive'>*/}
                        {/*<Image src='./logo2.jpg' fluid/> Login*/}
                        {/*</Header>*/}
                        <Image src='./logo2.jpg' size='small' verticalAlign='middle'/>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    type='email'
                                    onChange={this.handleEmailChange}
                                />
                                <Form.Input
                                    fluid icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handlePasswordChange}
                                />
                                <Button onClick={this.signIn} primary animated fluid>
                                    <Button.Content visible>Login</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='sign-in' />
                                    </Button.Content>
                                </Button>
                                <Divider horizontal>Or</Divider>
                                <Button secondary animated='fade' fluid>
                                    <Button.Content visible>Sign-up for a account</Button.Content>
                                    <Button.Content hidden>free</Button.Content>
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            forgot passwords? <a href='#'>Reset password</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;
