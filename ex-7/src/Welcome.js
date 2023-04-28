import React from 'react';


export class Welcome extends React.Component {
    render() {
      const { name } = this.props
      return <div>Welcome, {name}</div>;
        
    }
  }

  