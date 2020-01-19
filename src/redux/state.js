import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'haro', likesCount: 24 },
      { id: 2, message: 'priver', likesCount: 11 }
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'haro' },
      { id: 2, message: 'priver' },
      { id: 3, message: 'okvha' },
      { id: 4, message: 'hru rn' }
    ],
    dialogs: [
      { id: 1, name: 'oskar ezih', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
      { id: 2, name: 'maksis zazinim', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
      { id: 3, name: 'artem barabashkinzov', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
      { id: 4, name: 'arbar2000bytkevuchys', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' }
    ]
  },
  friends: {
    topThreeFriends: [
      { id: 1, name: 'sanya kakashnik', ava:'https://www.okino.ua/media/var/news/2018/10/04/venom.jpg' },
      { id: 2, name: 'grigoriy libidko', ava:'https://www.vbetnews.com/wp-content/uploads/2020/01/EFBEaaSXYAMMIl2.jpg' },
      { id: 3, name: 'dimuch', ava:'https://pbs.twimg.com/profile_images/1106202296801595392/99Ovyotd_400x400.jpg' },
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
  id: 4,
    message: postMessage,
    likesCount: 13
  }
  state.profilePage.posts.push(newPost);
  renderEntireTree(state)
}

export default state;