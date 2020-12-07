import react from "react";
import {connect} from 'react-redux';
class PersonalDetails extends react.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     fname: '',
  //     lname: ''
  //   }
  // }
  onChange = (event) => {
    // console.log('event ',this.state)
    this
      .props
      .dispatch({
        type: event.target.id,
        [event.target.id]:event.target.value
      })
  }
  render() {
    console.log('this.props ',this.props)
    return (
      <div>
        <h1>Employee Personal Details</h1>
        <label for="fname">First name:</label>
        <input
          value={this.props.fname}
          onChange={this.onChange}
          type="text"
          id="fname"
          name="fname"></input><br/><br/>
        <label for="lname">Last name:</label>
        <input
          value={this.props.lname}
          type="text"
          onChange={this.onChange}
          id="lname"
          name="lname"></input><br/><br/>
        <input type="submit" value="Submit"></input>
      </div>
    )
  }
}

// export default PersonalDetails;
const mapToProps = (state) => {
  console.log('state ',state)
  return {fname: state.personalDetailsReducer.fname, lname: state.personalDetailsReducer.lname}
}
export default connect(mapToProps)(PersonalDetails)