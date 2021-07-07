import {useDispatch} from "react-redux";
import {actions} from "../../redux/usersReducer";

type Props = {
    userId: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export const User = (props: Props) => {
    const dispatch = useDispatch()
    return (
        <div className="card w-50 m-3  bg-secondary text-white border-dark ">
            <div className="card-body">
                <h5 className="card-title">{props.fullName}</h5>
                <div className="d-flex">
                    <h5 className="card-title  pe-1">{props.location.city}</h5>
                    <h5 className="card-title pe-2">{props.location.country}</h5>
                </div>
                <p className="card-text">{props.status}</p>
                <button onClick={() => dispatch(actions.toggleFollow(props.userId))}
                        className="btn btn-dark">{props.followed ? "Unfollow" : "Follow"}</button>
            </div>
        </div>
    );
};

