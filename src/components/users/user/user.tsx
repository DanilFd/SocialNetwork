import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {actions} from "../../../redux/usersReducer";
import {User as UserType} from "../../../types/types";
import {sendFollow, sendUnfollow} from "../../../api/follow";
import {useState} from "react";

type Props = {
    user: UserType
}
export const User = ({user}: Props) => {
    const [followingInProgress, setFollowingInProgress] = useState(false)
    const dispatch = useDispatch()
    const follow = () => {
        setFollowingInProgress(true)
        sendFollow(user.id)
            .then(success => success && dispatch(actions.toggleFollow(user.id)))
            .finally(() => setFollowingInProgress(false))
    }
    const unfollow = () => {
        setFollowingInProgress(true)
        sendUnfollow(user.id)
            .then(success => success && dispatch(actions.toggleFollow(user.id)))
            .finally(() => setFollowingInProgress(false))
    }
    return (
        <div className="col-12 col-md-6 p-2">
            <div className="card bg-secondary text-white border-dark">
                <div className=" card-body">
                    <div className="container row g-0">
                        <div className="col-10">
                            <NavLink to={"/profile/" + user.id} className="text-decoration-none ">
                                <h5 style={{display: "inline"}} className="card-title">{user.name}</h5>
                            </NavLink>
                            <p style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minHeight: 23.33
                            }}
                               className="card-text">{user.status}</p>
                            <button disabled={followingInProgress}
                                    onClick={!user.followed ? follow : unfollow}
                                    className="btn btn-dark">{user.followed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <div className="col-2">
                            <img style={{width: 80, height: 80, borderRadius: 40}}
                                 src={user.photos.small || "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"}
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

