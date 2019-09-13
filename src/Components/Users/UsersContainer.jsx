import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`,
            {headers: {"Content-Type": "application/json"}})
            .then(response => {
                this.props.setUsers(response.data)
                this.props.toggleIsFetching(false);
            })
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
                   onPageChange={this.onPageChange}
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



export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching })(UsersContainer);