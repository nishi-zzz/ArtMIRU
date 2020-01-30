import React from 'react';
import Comment from './Comment';
import image from '../image/c.jpg';
import profile_image from '../image/me.jpg'
// import Zoom from 'react-medium-image-zoom';

class Home extends React.Component {

  render() {
    return (
      <div className='home-container'>
        <h2>今週の一枚</h2>

        <div className='art-frame'>
          <img src={image} alt='image' />
          <div className='art-info'>
            <p className='title'>ひまわり</p>
            <p className='author'>ゴッホ</p>
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
              </select>
            </div>
            <div className='comment-text'>
              <textarea className='text-input' type='text' placeholder='タグの回答 & それは絵のどの部分から連想したか' />
              <div class="text_underline"></div>
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
