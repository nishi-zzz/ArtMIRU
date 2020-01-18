import React from 'react';
import image from '../image/c.jpg';

class ArchiveCard extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <img src={image} alt="Paint" />
          <div className="container">
            <div className="art-info">
              <h4><b>{this.props.titile}</b></h4>
              <p>{this.props.author}</p>
            </div>
            <div className="art-meta">
              <div className="star-comment">
                <p><i className="fas fa-star"></i>5</p>
              </div>
              <div className="star-comment">
                <p><i className="fas fa-comments"></i>13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveCard;
