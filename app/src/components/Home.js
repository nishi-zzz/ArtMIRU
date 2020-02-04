import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import image from '../image/c.jpg';
import profile_image from '../image/me.jpg';
// import Zoom from 'react-medium-image-zoom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    const url = 'http://127.0.0.1:5000/api/arts';
    const header = {'Content-Type': 'application/json'};
    axios.get(url, {headers: header})
    .then((response) => {
      const art = response.data.arts[0]
      this.setState({
        title: art.title,
        author: art.author
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {


    return (
      <div className='home-container'>
        <h2>今週の一枚</h2>

        <div className='art-frame'>
          <img src={image} alt='image' />
          <div className='art-info'>
            <p className='title'>{ this.state.title }</p>
            <p className='author'>{ this.state.author }</p>
          </div>
        </div>

        <div className='comment-add'>
          <div className='profile-thumbnail'>
            <img src={profile_image} alt='NaN' />
          </div>
          <form className='comment-form' action='/comments' method='post'>
            <div className='comment-tag'>
              <select required className='text-input' name='comment-tag'>
                <option value='NaN'>コメントタグを選ぶ…</option>
                <option value='feel'>絵をみて感じたこと</option>
                <option value='story'>絵の中で描かれていること</option>
                <option value='next'>これからなにが起きそうか</option>
                <option value='notice'>絵を見て気づいたこと</option>
                <option value='other'>その他</option>
              </select>
            </div>
            <div className='comment-text'>
              <textarea className='text-input' type='text' placeholder='タグの回答 & それは絵のどの部分から連想したか' />
              <div className="text_underline"></div>
            </div>
            <div className='submit-button'>
              <input type="submit" value="送信する" />
            </div>
          </form>
        </div>
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Home;
