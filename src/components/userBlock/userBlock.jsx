import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersFetchData } from "../../store/actions/userActions";
import "./userBlock.scss";
import avatar from "../../static/images/man.svg";

class UserBlock extends React.Component {
  componentDidMount() {
    this.props.fetchData("https://jsonplaceholder.typicode.com/users");
  }

  render() {
    if (this.props.isLoading) {
      return <p>is Loading</p>;
    }
    const usersList = this.props.users.map(item => {
      return (
        <Link to={`/user/${item.id}`}>
          <div className="user-block__item">
            <div className="user-block__item-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="user-block__item-name">{item.name}</div>
          </div>
        </Link>
      );
    });
    return (
      <div className='users-block'>{usersList}</div>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.usersReducer,
    isLoading: store.userIsLoadingReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBlock);
