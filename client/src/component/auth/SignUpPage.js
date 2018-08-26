import React from 'react'
import {Button, Form, Grid, Image, Segment} from 'semantic-ui-react'

const divStyle = {
        margin: '20px',
}

const SignUpPage = () => (
    <div style={divStyle}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column  style={{ maxWidth: 450 }}>
                <Image src='./logo2.jpg' size='small' verticalAlign='middle'/>
                <Form  size='large'>
                    <Segment textAlign='left' stacked>
                        <Form.Field>
                            <Form.Input icon='user' iconPosition='left' label='Email address' placeholder='Email address'type='email'/>
                            <Form.Input fluid icon='lock' iconPosition='left' label='Password' placeholder='Password' type='password'/>
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Last name' placeholder='Last name'  />
                        </Form.Group>
                        <Form.Field>
                            <Form.Input label='Address' placeholder='Address'/>
                            <Form.Input icon='mobile alternate' iconPosition='left' label='Phone' placeholder='Phone' />
                        </Form.Field>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button primary type='submit'>Submit</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </div>






)

export default SignUpPage;
