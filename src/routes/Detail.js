import React from 'react'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined){
      history.push("/"); 
      // this will force to go back homepage if not pressed any movie
      // "redirection"
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{ location.state.title }</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
