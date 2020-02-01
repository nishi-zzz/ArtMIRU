import React from 'react';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      isButtonDisabled: true
    }
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value});
    this.setState({isButtonDisabled: false})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value});
    this.setState({isButtonDisabled: false})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // form値取得
    const params = {
      email: this.state.email,
      password: this.state.password
    }

    alert(JSON.stringify(params, null, ''));
  }

  render() {

    let button;
    if (this.state.isButtonDisabled) {
      button = (
        <input type="submit" value="ログイン" disabled />
      )
    } else {
      button = (
        <input type="submit" value="ログイン" />
      )
    }

    return (
      <div className='login-container'>
        <h2>ログイン</h2>
        <form className='push-form' onSubmit={this.handleSubmit}>
          <div className='email'>
            <h3>メールアドレス</h3>
            <input className='text-input' value={this.state.email} onChange={this.changeEmail} />
            <div className="text_underline"></div>
          </div>

          <div className='password'>
            <h3>パスワード</h3>
            <input className='text-input' type="password" value={this.state.password} onChange={this.changePassword} />
            <div className="text_underline"></div>
          </div>

          <div className='submit-button'>
            { button }
          </div>
          <div className='link'>
            <a href="/signup">アカウントを作成する</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
