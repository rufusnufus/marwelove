import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import apiService from '../../services/apiService'
import './index.css'

function Bookmark({ bookmark, id, type }) {
  const [isBookmarked, setIsBookmarked] = useState(bookmark)
  const token = useSelector((state) => state.user.token)

  const onClick = useCallback(
    (event) => {
      event.stopPropagation()
      setIsBookmarked(!isBookmarked)
      apiService.toggleBookmark(id, token, type)
    },
    [isBookmarked]
  )
  return (
    <img
      src={isBookmarked ? '/images/bookmark.png' : '/images/bookmark_blank.png'}
      alt=""
      onClick={onClick}
      className="bookmark"
      data-testid="bookmark"
    />
  )
}

export default Bookmark
