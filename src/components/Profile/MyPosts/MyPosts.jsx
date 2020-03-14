import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import AddPostForm from "./AddPostForm"

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let addNewPost = (values) => {
    props.addPost(values.newPostBody)
  }

  return (
    <div className={s.postsBlock}>
      <h1>My posts</h1>
      <AddPostForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}



export default MyPosts;