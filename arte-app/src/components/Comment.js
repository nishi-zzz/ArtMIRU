import React from 'react';
import profile_image from '../image/me.jpg'

class Comment extends React.Component {
  render() {
    return (
      <div className='comment-area'>
        <div className='profile-thumbnail'>
          <img src={profile_image} alt='thumbnail' />
        </div>
        <div className='comment'>
          <p>kosuke</p>
          <h5>タグ：絵で何がおきているか</h5>
          <p>
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          </p>
        </div>

      </div>
    )
  }
}

export default Comment;
