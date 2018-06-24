import React, {PropTypes} from 'react';


class SandboxForm extends React.Component{

    // MyClick(){
    //     console.log("EMail: " + this.state.email);
    //     console.log("Password: " + this.state.password);
    // }
    render(){
        return(
            <form>
            <input type="text"  placeholder="SandboxId" onChange={this.props.sandboxIdChange} />
            <input type="text" placeholder="x-ibm-client-id"  onChange={this.props.clientIdChange} />
            <button type="button" onClick={this.props.handleClick}>Create Sandbox</button>
            <br/>
            {this.props.sandboxId}.
            <br/>
            {this.props.clientId}
            <br/>
            {this.props.sandboxstateid}
        </form>
        );
    }
}


SandboxForm.PropTypes = {
    sandboxId: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    sandboxstateid: PropTypes.string.isRequired
};


export default SandboxForm;