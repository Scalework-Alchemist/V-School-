import React,{Component} from 'react'
import PropTypes from 'prop-types';

export class Home extends Component {
    constructor(props){
    super()
    this.state = {
        age: props.initialAge,
        status: 0
    };
    this.onMakeOlder=this.onMakeOlder.bind(this)
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age += 3
        });
        
    }

    render(){
        console.log(this.props)
        return(
        <div>
            <p>im a Component</p>
            <p>your name is {this.props.name} your age is {this.state.age}</p>
            <hr/>
            <button className="btn" onClick={this.onMakeOlder}>Make me older</button>
        </div>
            
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};