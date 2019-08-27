import React, { Component } from "react";
import { connect } from "react-redux";
import { commentsFetchData } from "../../store/actions/commentsAction";
import "./postBlock.scss";
class PostBlock extends Component {
  // componentDidMount() {
  //   this.props.fetchComments(
  //     `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  //   );
  // }

  getCommentsById = id => {
    this.props.fetchComments(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
  };

  handleClickComment = () => {};

  render() {
    const listPosts = this.props.posts.map(item => {
      this.getCommentsById(item.id);
      return (
        !this.props.isLoadingComments && (
          <div className="post-block">
            <div className="post-block__name">{this.props.name}</div>
            <div className="post-block__info">
              <div className="post-block__info-title">{item.title}</div>
              <div className="post-block__info-content">{item.body}</div>
              <div
                className="post-block__info-comment"
                onClick={this.handleClickComment}
              >
                COMMENT
              </div>
            </div>
          </div>
        )
      );
    });
    return <div>{listPosts}</div>;
  }
}

const mapStateToProps = store => {
  return {
    comments: store.commentsReducer,
    isLoadingComments: store.commentsIsLoadingReducer,
    isLoading: store.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: url => dispatch(commentsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostBlock);
