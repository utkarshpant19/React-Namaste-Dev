import React from 'react';

class UserClass extends React.Component {
  constructor (props) {
    console.log ('Constructor Called');
    super (props);
    // Declaring State Variables in Class based Components

    this.state = {
      userInfo: {
        userName: '',
        location: '',
      },
    };
  }

  async componentDidMount () {
    // Make an API Call
    const userdata = await fetch ('https://api.github.com/users/utkarshpant19');
    const json = await userdata.json ();
    debugger;
    this.setState ({
      userInfo: json,
    });

    console.log (json);

    console.log ('Child component did mount');
  }

  componentDidUpdate () {
    console.log ('Component did update is called');
  }

  componentWillUnmount () {
    console.log ('Component will unmount is called');
  }

  render () {
    console.log ('Render is called');
    const {name, location} = this.props;
    const {count} = this.state;

    return (
      <div className="user-card">

        <h3>{count}</h3>
        <button
          onClick={() => {
            // Updating State variable in CBC
            this.setState ({
              count: count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h1>{this.state.userInfo.name}</h1>
        <span>Software Developer</span>
        <h3>X: @utkarshp19</h3>
        <h4>Location: {this.state.userInfo.location}</h4>
      </div>
    );
  }
}

export default UserClass;

// MOUNTING PHASE
// - Constructor is called
// - Render() is called
// - HTML Updated with Dummy Data
// - componentDidMount() is called
// - API Call is made
// - setState() is called with API data

// UPDATE PHASE
// - When setState() is called, React initializes it's Reconcilation cycles, rerenders the component
// - render is called with updated data
// - Updates the UI with updated data
// componentDidUpdate() is called

//  UNMOUNT PHASE
// - Like ngOnDestroy, will be called before unmounting the component from the DOM
//  - componentWillUnmount() is called
