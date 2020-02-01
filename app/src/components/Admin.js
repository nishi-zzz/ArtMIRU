import React from 'react';

class Admin extends React.Component {
  render() {
    return (
      <div className='admin-container'>
        <h2>Admin</h2>
        <form className='push-form' method="post" action="/arts">
          <div className='file'>
            <h3>画像ファイル</h3>
            <input type='file' name='new-art-image' />
          </div>

          <div className='title'>
            <h3>作品名</h3>
            <input className='text-input' name='art-title'　/>
            <div class="text_underline"></div>
          </div>

          <div className='author'>
            <h3>著作者名</h3>
            <input className='text-input' name='art-author' />
            <div className="text_underline"></div>
          </div>

          <div className='submit-button'>
            <input type="submit" value="作品を投稿する" />
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;
