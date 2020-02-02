import React from 'react';
import axios from 'axios';
import profile_image from '../image/default3.svg'
import { withRouter } from 'react-router';

let createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      image_src: profile_image,
      email: '',
      profile: '',
      password: '',
      hasNameError: false,
      hasEmailError: false,
      hasPasswordError: false
    }
  };


  handleChangeFile = (e) => {
    var files = e.target.files;
    var image_url = files.length===0 ? this.state.image_src : createObjectURL(files[0]);
    this.setState({image_src: image_url});
  }

  changeName = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    this.setState({
      name: inputValue,
      hasNameError: isEmpty
    });
  }

  changeEmail = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    this.setState({
      email: inputValue,
      hasEmailError: isEmpty
    });
  }

  changePassword = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    this.setState({
      password: inputValue,
      hasPasswordError: isEmpty
    });
  }

  changeProfile = (e) => {
    this.setState({profile: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      image_path: this.state.image_src,
      profile: this.state.profile
    })
    let isError = false;
    const header = {'Content-Type': 'application/json'}
    axios.post('http://127.0.0.1:5000/api/users', data, {headers: header})
    .then(function (response) {
      console.log(response);
      this.props.history.push('/');
      // if(response.data === 'sql error') {
      //   isError = true;
      // }
    })
    .catch(function (error) {
      console.log(error);
    });
    //
    // if(!isError) {
    //   this.props.history.push('/');
    //   console.log('push');
    // }

  }

  render() {
    let nameErrorText, emailErrorText, passwordErrorText;

    if (this.state.hasNameError) {
      nameErrorText = (
        <p className='contact-message-error'>
          ユーザ名を入力してください
        </p>
      )
    }
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      )
    }
    if (this.state.hasPasswordError) {
      passwordErrorText = (
        <p className='contact-message-error'>
          パスワードを入力してください
        </p>
      )
    }

    let button;
    if (this.state.hasNameError || this.state.hasEmailError || this.state.hasPasswordError) {
      button = (
        <input type="submit" value="新規ユーザ登録" disabled />
      )
    } else {
      button = (
        <input type="submit" value="新規ユーザ登録" />
      )
    }

    return (
      <div className='profile-container'>
        <h2>新規登録</h2>
        <form className='profile' onSubmit={(e) => {this.handleSubmit(e)}}>
          <div className='edit-area'>
            <div className='profile-thumbnail'>
              <img src={this.state.image_src} />
              <input type="file" ref="file" onChange={this.handleChangeFile} name="profile" accept="image/png, image/jpeg, image/svg" alt="確認する" />
            </div>
            <div className='profile-text'>
              <div className='name'>
                <h3>ユーザ名</h3>
                <input className='text-input' value={this.state.name} onChange={this.changeName} />
                <div className="text_underline"></div>
                {nameErrorText}
              </div>
              <div className='address'>
                <h3>メールアドレス</h3>
                <input className='text-input' value={this.state.email} onChange={this.changeEmail} />
                <div className="text_underline"></div>
                {emailErrorText}
              </div>
              <div className='password'>
                <h3>パスワード</h3>
                <input className='text-input' type="password" name='art-title' value={this.state.password} onChange={this.changePassword} />
                <div className="text_underline"></div>
                {passwordErrorText}
              </div>
              <div className='introducea'>
                <h3>自己紹介</h3>
                <textarea className='text-input' value={this.state.profile} onChange={this.changeProfile} />
                <div className="text_underline"></div>
              </div>
            </div>
          </div>
          <div className='submit-button'>
            { button }
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
