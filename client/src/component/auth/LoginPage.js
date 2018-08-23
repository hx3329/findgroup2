import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
    <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='blue' textAlign='center'>
                    <Image src='./logo.jpg' /> Login
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                        <Button color='blue' fluid size='large' >
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm;
