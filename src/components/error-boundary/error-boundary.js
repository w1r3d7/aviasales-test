import React, {Component} from 'react';
import Error from '../error';

class ErrorBoundary extends Component {
  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {children} = this.props;
    const {error} = this.state;

    if (error) {
      return <Error />
    }

    return (children)
  }
}

export default ErrorBoundary;
