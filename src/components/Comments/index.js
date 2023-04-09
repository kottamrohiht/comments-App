import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsArr: [],
    nameInput: '',
    commentInput: '',
  }

  onClickDelete = id => {
    const {commentsArr} = this.state
    const filteredItems = commentsArr.filter(each => each.id !== id)

    this.setState({commentsArr: filteredItems})
  }

  toggleLike = id => {
    const {commentsArr} = this.state
    const toggledArr = commentsArr.map(each => {
      if (each.id === id) {
        return {
          id: each.id,
          name: each.name,
          comment: each.comment,
          date: each.date,
          isLiked: !each.isLiked,
          intialClassName: each.intialClassName,
        }
      }
      return each
    })
    this.setState({commentsArr: toggledArr})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const backgroundColor = `inital-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      intialClassName: backgroundColor,
    }

    if (nameInput !== '' && commentInput !== '') {
      this.setState(prevState => ({
        commentsArr: [...prevState.commentsArr, newComment],
        nameInput: '',
        commentInput: '',
      }))
    }
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsArr} = this.state
    const count = commentsArr.length
    return (
      <div className="app-container">
        <div className="inner-container">
          <div className="top-container">
            <h1 className="heading"> Comments </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-img"
              alt="comments"
            />
            <p className="para"> Say something about 4.0 Technologies </p>
            <form className="from-element" onSubmit={this.onSubmitForm}>
              <input
                type="text"
                value={nameInput}
                className="name-input"
                onChange={this.onChangeName}
                placeholder="Your Name"
              />

              <textarea
                rows="5"
                cols="10"
                value={commentInput}
                className="comment-input"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              >
                Your Comment
              </textarea>

              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-img-small"
            alt="comment img"
          />
        </div>

        <hr className="hr-line" />
        <div className="comments-count-container">
          <p className="count"> {count} </p>
          <p className="Comments">Comments</p>
        </div>

        <div className="comments-list-container">
          <ul className="comments-container">
            {commentsArr.map(each => (
              <CommentItem
                key={each.id}
                item={each}
                toggleLike={this.toggleLike}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
