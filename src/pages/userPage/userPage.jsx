import React from "react";
import { connect } from "react-redux";
import "./userPage.scss";
import { postsFetchData } from "../../store/actions/postsAction";
import { usersFetchData } from "../../store/actions/userActions";
import PostBlock from "../../components/postBlock/postBlock";
class UserPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers("https://jsonplaceholder.typicode.com/users");
    this.props.fetchPosts("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    console.log(this.props.users)
    return (
      !this.props.isLoading &&
      !this.props.isLoadingPosts && (
        <div className="user">
          <div className="user-card">
            <div className="user-card__avatar">IMG</div>
            <div className="user-card__info">
              <div className='user-card__info-name'>
                Name:{this.props.users[this.props.match.url.slice(6, 7)].name}
              </div>
              <div className='user-card__info-email'>
                Username: {this.props.users[this.props.match.url.slice(6, 7)].username}
              </div>
              <div className='user-card__info-email'>
                Email: {this.props.users[this.props.match.url.slice(6, 7)].email}
              </div>
              <div className='user-card__info-phone'>
                Phone: {this.props.users[this.props.match.url.slice(6, 7)].phone}
              </div>
              <div className='user-card__info-website'>
                Website: {this.props.users[this.props.match.url.slice(6, 7)].website}
              </div>
            </div>
          </div>
          <PostBlock
            posts={this.props.posts.filter(
              item => item.userId === Number(this.props.match.url.slice(6, 7))
            )}
            name={this.props.users[this.props.match.url.slice(6, 7)].name}
          />
        </div>
      )
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.usersReducer,
    isLoading: store.postsIsLoadingReducer,
    isLoadingPosts: store.postsIsLoadingReducer,
    posts: store.postsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: url => dispatch(postsFetchData(url)),
    fetchUsers: url => dispatch(usersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
