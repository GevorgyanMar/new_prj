import React from 'react'
import { useSelector } from 'react-redux';
import './userInfo.css';

const UserInfo = () => {
    const userData = useSelector(state => state.user)
    return (
        <section className="user-info-section">
            <div className="user-info-flex">
                <div className="default-img"><img src="./user.jpg" /></div>
                <div className="user-info">{userData.firstName}</div>
                <div className="drop-down-icon"></div>
            </div>

        </section>
    )
}

// function mapStateToProps(state) {
//     return {
//         user: state.user

//     }



export default UserInfo;