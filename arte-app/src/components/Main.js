import React from 'react';
import ArchiveCard from './ArchiveCard';
import image from '../image/c.jpg';

import {Switch, Route} from "react-router-dom";

class Main extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

function Home() {
  return (
    <div className='home-container'>
      <h2>Home</h2>

      <img src={image} alt='image' />

      <div className='art-info'>
        <p className='title'>ひまわり</p>
        <p className='author'>ゴッホ</p>
      </div>

      <div className='comment-form'>
        <div className='profile-thumbnail'>
          <img src='' alt='NaN' />
        </div>
        <form className='comment-area' action='' method=''>
          <select name='comment-tag'>
            <option value=''>コメントタグを選ぶ…</option>
            <option value=''>絵を見て気づいたこと</option>
            <option value=''>絵でなにが起きているか</option>
            <option value=''>これからなにが起きそうか</option>
            <option value=''>絵から受けた印象</option>
          </select>
          <input type='text' value='タグの回答とそれは絵のどの部分から連想したかを書きましょう' />
          <button>
            コメントを送信
          </button>
        </form>
      </div>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Archive() {

  const ArchiveList = [
    {
      title: 'ひまわり',
      author: 'ゴッホ',
      image: '',
      date: '',
      commentNum: 5
    },
  ];

  return (
    <div>
      <h2>Archive</h2>

      <div className='card-container'>
        { ArchiveList.map((archiveItem) => {
          return (
            <ArchiveCard
              title={ archiveItem.title }
              author={ archiveItem.author }
              image={ archiveItem.image }
              date={ archiveItem.date }
              commentNum={ archiveItem.title }
            />
          );
        }) }
      </div>
    </div>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Signup() {
  return <h2>Signup</h2>;
}

export default Main;
