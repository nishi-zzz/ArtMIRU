import React, { useState } from 'react';
import axios from 'axios';
import profile_image from '../image/default3.svg';
import { useAuth0 } from "../react-auth0-spa";

let createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

function ProfileHooks() {
  const [name, setName] = useState('');
  const [image_src, setImageSrc] = useState(profile_image);
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [password, setPassword] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleChangeFile = (e) => {
    var files = e.target.files;
    var image_url = files.length===0 ? image_src : createObjectURL(files[0]);
    setImageSrc(image_url);
  }

  const changeName = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    setName(inputValue);
    setHasNameError(isEmpty);
  }

  const changeEmail = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    setEmail(inputValue);
    setHasEmailError(isEmpty);
  }

  const changePassword = (e) => {
    const inputValue = e.target.value;
    const isEmpty = inputValue === '';

    setPassword(inputValue);
    setHasPasswordError(isEmpty);
  }

  const changeProfile = (e) => {
    setProfile(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      name: name,
      password: password,
      email: email,
      image_path: image_src,
      profile: profile
    })
    let isError = false;
    // あとで変更↓
    let id = '81';
    const url = 'http://127.0.0.1:5000/api/users/' + id;
    const header = {'Content-Type': 'application/json'};
    axios.put(url, data, {headers: header})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  let nameErrorText, emailErrorText, passwordErrorText;

  if (hasNameError) {
    nameErrorText = (
      <p className='contact-message-error'>
        ユーザ名を入力してください
      </p>
    )
  }
  if (hasEmailError) {
    emailErrorText = (
      <p className='contact-message-error'>
        メールアドレスを入力してください
      </p>
    )
  }
  if (hasPasswordError) {
    passwordErrorText = (
      <p className='contact-message-error'>
        パスワードを入力してください
      </p>
    )
  }

  let button;
  if (hasNameError || hasEmailError || hasPasswordError) {
    button = (
      <input type="submit" value="変更内容を保存" disabled />
    )
  } else {
    button = (
      <input type="submit" value="変更内容を保存" />
    )
  }

  return (
    <div className='profile-container'>
      <h2>プロフィール</h2>
      <form className='profile' onSubmit={(e) => {handleSubmit(e)}}>
        <div className='edit-area'>
          <div className='profile-thumbnail'>
            <img src={image_src} />
            <input type="file" onChange={handleChangeFile} name="profile" accept="image/png, image/jpeg, image/svg" alt="確認する" />
          </div>
          <div className='profile-text'>
            <div className='name'>
              <h3>ユーザ名</h3>
              <input className='text-input' value={name} onChange={changeName} />
              <div className="text_underline"></div>
              {nameErrorText}
            </div>
            <div className='address'>
              <h3>メールアドレス</h3>
              <input className='text-input' value={email} onChange={changeEmail} />
              <div className="text_underline"></div>
              {emailErrorText}
            </div>
            <div className='password'>
              <h3>パスワード</h3>
              <input className='text-input' type="password" name='art-title' value={password} onChange={changePassword} />
              <div className="text_underline"></div>
              {passwordErrorText}
            </div>
            <div className='introducea'>
              <h3>自己紹介</h3>
              <textarea className='text-input' value={profile} onChange={changeProfile} />
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

export default ProfileHooks;
