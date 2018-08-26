import React from 'react';
import axios from 'axios';

class Work extends React.Component{
    // build server example
    state={users:[]}
    componentDidMount(){
        axios.get('/users')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }
    render(){
        return(
            <div className='Work'>
                <h1>This is Work!</h1>
                <div>
                    {/*add common in app*/}
                    <h1>Users test server</h1>
                    <ul>
                        {this.state.users.map(user=>
                            <li key={user.id}>{user.username}</li>
                        )}
                    </ul>
                </div>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
                <h1>This is Work!</h1>
            </div>
        );
    }
}


export default Work;
