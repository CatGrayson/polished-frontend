import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


class PolishLogin extends Component {
    render(){
        return(
            <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form>
                  <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                  <Button icon='heart outline' content='Login' color='pink' size='medium' />
                  
                </Form>
              </Grid.Column>
        
              <Grid.Column verticalAlign='middle'>
              <Form>
              <Form.Input label='Add Your Username' placeholder='Create a Username' />
                <Button color='purple' content='Sign up' icon='signup' size='medium' />
                </Form>
              </Grid.Column>
            </Grid>
        
            <Divider vertical>Or</Divider>
          </Segment>
        )
    }
}

export default PolishLogin