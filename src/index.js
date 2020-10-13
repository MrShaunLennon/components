import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 21:39pm"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 15:35pm"
        content="Great job!"
        avatar={faker.image.avatar()}
        />
      <CommentDetail
        author="James"
        timeAgo="Yesterday at 17:00pm"
        content="Amazing read!"
        avatar={faker.image.avatar()}
        />
    </div>
  );
};



ReactDOM.render(
  <div><App /></div>,
  document.querySelector('#root'));
