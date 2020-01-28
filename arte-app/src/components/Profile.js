import React from 'react';
import profile_image from '../image/default3.svg'

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'kosuke',
      image_src: profile_image,
      email: 'kousuke.soccer05@gmail.com',
      profile: 'あああああああああああああああああああああああああああああああああああああああああああ'
    }
  }

  handleChangeFile = (e) => {
    var files = e.target.files;
    var image_url = files.length===0 ? this.state.image_src : createObjectURL(files[0]);
    this.setState({image_src: image_url});
  }

  changeName = (e) => {
    this.setState({name: e.target.value});
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value});
  }

  changeProfile = (e) => {
    this.setState({profile: e.target.value});
  }

  render() {
    return (
      <div className='profile-container'>
        <h2>プロフィール設定</h2>
        <form className='profile'>
          <div className='edit-area'>
            <div className='profile-thumbnail'>
              <img src={this.state.image_src} />
              <input type="file" ref="file" onChange={this.handleChangeFile} name="profile" accept="image/png, image/jpeg, image/svg" alt="確認する" />
            </div>
            <div className='profile-text'>
              <div className='name'>
                <h3>ユーザ名</h3>
                <input className='text-input' value={this.state.name} onChange={this.changeName} />
                <div class="text_underline"></div>
              </div>
              <div className='address'>
                <h3>メールアドレス</h3>
                <input className='text-input' value={this.state.email} onChange={this.changeEmail} />
                <div class="text_underline"></div>
              </div>
              <div className='introducea'>
                <h3>自己紹介</h3>
                <textarea className='text-input' value={this.state.profile} onChange={this.changeProfile} />
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
