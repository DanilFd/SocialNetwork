import {useDispatch} from "react-redux";
import {actions} from "../../../redux/usersReducer";
import {User as UserType} from "../../../types/types";

type Props = {
    user: UserType
}
export const User = ({user}: Props) => {
    const dispatch = useDispatch()
    return (
        <div className="col-12 col-md-6 p-2">
            <div className="card bg-secondary text-white border-dark">
                <div className=" card-body">
                    <div className="container row g-0">
                        <div className="col-10">
                            <h5 className="card-title">{user.name}</h5>
                            <p style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minHeight: 23.33
                            }}
                               className="card-text">{user.status}</p>
                            <button onClick={() => dispatch(actions.toggleFollow(user.id))}
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

