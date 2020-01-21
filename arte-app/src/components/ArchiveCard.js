import React from 'react';
import image from '../image/c.jpg';

class ArchiveCard extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <img src={image} alt="Paint" />
          <div className="container">
            <div className="item-info">
              <h4><b>{this.props.title}</b></h4>
              <p>{this.props.author}</p>
            </div>
            <div className="item-meta">
              <p>10 days ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveCard;
