import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';
import MenuItem from './MenuItem';
import image from '../image/c.jpg';
import profile_image from '../image/me.jpg';
// import Zoom from 'react-medium-image-zoom';
import { useAuth0 } from "../react-auth0-spa";

function HomeHooks() {
  const [art_id, setArtId] = useState(2);
  const [art_title, setArtTitle] = useState();
  const [art_author, setArtAuthor] = useState();
  const [art_image_path, setArtImagePath] = useState();
  const [art_comments, setArtComments] = useState();

  const [user_id, setUserId] = useState();
  const [tag_value, setTagValue] = useState('NaN');
  const [tag_id, setTagId] = useState(0);
  const [comment_value, setCommentValue] = useState('タグの回答 & それは絵のどの部分から連想したか');

  const [button, setButton] = useState((<input type="submit" value="コメントを送信する" disabled />));

  const { loading, user, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    async function fetchArtData() {
      const url = 'http://127.0.0.1:5000/api/arts/2';
      const header = {'Content-Type': 'application/json'};
      await axios.get(url, {headers: header})
      .then((response) => {
        const art = response.data.art
        setArtId(art.id);
        setArtTitle(art.title);
        setArtAuthor(art.author);
        setArtImagePath(art.image_path);
        setArtComments(art.comments);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    fetchArtData();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      const url = 'http://127.0.0.1:5000/api/users/' + user.email;
      await axios.get(url)
      .then((response) => {
        console.log(response);
        const user = response.data.user;
        setUserId(user.id);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    fetchUserData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      art_id: art_id,
      user_id: user_id,
      tag_id: tag_id,
      content: comment_value
    })
    const url = 'http://127.0.0.1:5000/api/comments';
    const header = {'Content-Type': 'application/json'};
    await axios.post(url, data, {headers: header})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function handleTagChange(e) {
    setTagValue(e.target.value);
    if (tag_value == 'NaN') {
      setTagId(0);
      setButton((<input type="submit" value="コメントを送信する" disabled />));
    } else if (tag_value == 'feel') {
      setTagId(1);
      setButton((<input type="submit" value="コメントを送信する" />));
    } else if (tag_value == 'story') {
      setTagId(2);
      setButton((<input type="submit" value="コメントを送信する" />));
    } else if (tag_value == 'next') {
      setTagId(3);
      setButton((<input type="submit" value="コメントを送信する" />));
    } else if (tag_value == 'notice') {
      setTagId(4);
      setButton((<input type="submit" value="コメントを送信する" />));
    } else if (tag_value == 'other') {
      setTagId(5);
      setButton((<input type="submit" value="コメントを送信する" />));
    }
  }

  function handleCommentChange(e) {
    setCommentValue(e.target.value);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home-container'>
      <h2>今週の一枚</h2>

      <div className='art-frame'>
        <img src={image} alt='image' />
        <div className='art-info'>
          <p className='title'>{ art_title }</p>
          <p className='author'>{ art_author }</p>
        </div>
      </div>
      {!isAuthenticated && (
        <a className='btn-flat-dashed-filled' key={5} onClick={()=>{loginWithRedirect({});}}>コメントするにはログインしてください</a>
      )}
      {isAuthenticated && (
        <div className='comment-add'>
          <div className='profile-thumbnail'>
            <img src={user.picture} alt='NaN' />
          </div>
          <form className='comment-form' onSubmit={(e) => {handleSubmit(e)}}>
            <div className='comment-tag'>
              <select required className='text-input' value={tag_value} onChange={handleTagChange}>
                <option value='NaN'>コメントタグを選ぶ…</option>
                <option value='feel'>絵をみて感じたこと</option>
                <option value='story'>絵の中で描かれていること</option>
                <option value='next'>これからなにが起きそうか</option>
                <option value='notice'>絵を見て気づいたこと</option>
                <option value='other'>その他</option>
              </select>
            </div>
            <div className='comment-text'>
              <textarea className='text-input' type='text' value={comment_value} onChange={handleCommentChange} />
              <div className="text_underline"></div>
            </div>
            <div className='submit-button'>
              {button}
            </div>
          </form>
        </div>
      )}
      <Comment />
      <Comment />
    </div>
  );
}

export default HomeHooks;
