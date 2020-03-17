import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer"
import {render} from "@testing-library/react"
import App from "../App"
import React from "react"

let state = {
  posts: [
    {id: 1, message: 'haro', likesCount: 24},
    {id: 2, message: 'priver', likesCount: 11}
  ]
}

test('length of postst should be incremented', () => {
  let action = addPostActionCreator('kimano')
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
});

test('added post should contain exact data', () => {
  let action = addPostActionCreator('kimano')
  let newState = profileReducer(state, action)

  expect(newState.posts[2].message).toBe('kimano')
});

test('after deleting length of posts must be decremented', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(1)
});

test('after deleting a post, posts length shouldnt be changed if id is incorrect', () => {
  let action = deletePost(144)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(2)
});
