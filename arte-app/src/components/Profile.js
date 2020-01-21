import React from 'react';
import profile_image from '../image/me.jpg'

class Profile extends React.Component {
  render() {
    const user = {
      name: 'kosuke',
      image_url: '',
      mail_address: 'kousuke.soccer05@gmail.com',
      profile: 'あああああああああああああああああああああああああああああああああああああああああああ'
    }
    return (
      <div className='profile-container'>
        <h2>Profile</h2>
        <form className='profile'>
          <div className='edit-area'>
            <div className='profile-thumbnail'>
              <img src={profile_image} />
            </div>
            <div className='profile-text'>
              <div className='name'>
                <h3>ユーザ名</h3>
                <input className='text-input' placeholder={user.name} />
                <div class="text_underline"></div>
              </div>
              <div className='address'>
                <h3>メールアドレス</h3>
                <input className='text-input' placeholder={user.mail_address} />
                <div class="text_underline"></div>
              </div>
              <div className='introducea'>
                <h3>自己紹介</h3>
                <textarea className='text-input' placeholder={user.profile} />
                <div class="text_underline"></div>
              </div>
            </div>
          </div>
          <div className='submit-button'>
            <input type="submit" value="変更内容を保存する" />
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
