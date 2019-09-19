import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import {Preloader} from "../Preloader";
import {WithAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
          this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    // onPageChange = pageNumber => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     axios.get(`http://localhost:3000/users?_page=${pageNumber}&_limit=${this.props.pageSize}`,
    //         {headers: {"Content-Type": "application/json"}})
    //         .then(response => {
    //             this.props.setUsers(response.data.items);
    //             this.props.toggleIsFetching(false);
    //         });
    // };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
              //     onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}/>
        </>
    }

}
    let mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching
        }
    }


    export default compose(//WithAuthRedirect,
        connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }))
        (UsersContainer);