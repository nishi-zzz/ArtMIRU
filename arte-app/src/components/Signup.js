import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div className='signup-container'>
        <h2>新規ユーザ登録</h2>
        <form className='push-form' method="post" action="/users">
          <div className='email'>
            <h3>メールアドレス</h3>
            <input className='text-input' name='email' />
            <div class="text_underline"></div>
          </div>

          <div className='password'>
            <h3>パスワード</h3>
            <input className='text-input' name='art-title' />
            <div class="text_underline"></div>
          </div>

          <div className='submit-button'>
            <input type="submit" value="新規登録する" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
