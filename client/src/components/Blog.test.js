/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

const blog = {
  title: 'React patterns',
  author: 'Michael Chan',
  url: 'https://reactpatterns.com/',
  likes: 7,
  user: {
    name: 'user',
  },
  comments: []
}

test('When like button is pressed twice, event handler is called twice, 5.15 STEP 3', async () => {
  const mockHandler = jest.fn()
  const mockHandlerDelete = jest.fn() // to avoid failed prop type

  render(
    <Blog
      blog={blog}
      handleLike={mockHandler}
      handleDeleteBlog={mockHandlerDelete}
    />
  )

  const user = userEvent.setup()

  const likeBtn = screen.getByText('like')
  await user.click(likeBtn)
  await user.click(likeBtn)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
