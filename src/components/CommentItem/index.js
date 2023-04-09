import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {item, toggleLike, onClickDelete} = props
  const {id, name, comment, date, isLiked, intialClassName} = item

  const firstLetter = name[0].toUpperCase()

  const time = formatDistanceToNow(date)

  const onclickLike = () => {
    toggleLike(id)
  }
  const onclickDelete = () => {
    onClickDelete(id)
  }

  const likeTxtColor = isLiked ? 'likedColor' : ''

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="main-container">
      <p className={intialClassName}> {firstLetter} </p>

      <div className="name-container">
        <div className="time-container">
          <h1 className="name"> {name} </h1>
          <p className="commented-time"> {time} </p>
        </div>

        <div className="comment-container">
          <p className="user-comment"> {comment} </p>
        </div>
      </div>

      <div className="like-container">
        <div className="like-img-name-container">
          <button
            className="button-like-img"
            type="button"
            onClick={onclickLike}
          >
            <img src={likeImg} className="like-img" alt="like" />
          </button>
          <p className={`like-text ${likeTxtColor}`}> Like </p>
        </div>

        <button
          type="button"
          onClick={onclickDelete}
          testid="delete"
          className="button-like-img"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
