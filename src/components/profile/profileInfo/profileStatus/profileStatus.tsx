import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getStatusThunk, updateStatusThunk} from "../../../../redux/asyncActions/profile";

type Props = {
    status: string
    userId: number
}

export const ProfileStatus = (props: Props) => {
        const [statusText, setStatusText] = useState(props.status)
        const [editMode, setEditMode] = useState(false)
        const dispatch = useDispatch()
        const toggleEditMode = () => {
            setEditMode(!editMode)
            editMode && dispatch(updateStatusThunk(statusText))
        }
        useEffect(() => {
            setStatusText(props.status)
        }, [props.status])
        useEffect(() => {
            dispatch(getStatusThunk(props.userId))
        }, [dispatch, props.userId, statusText])
        return (
            <div>
                {
                    editMode ?
                        <div>
                            <input autoFocus={true} value={statusText} onChange={e => setStatusText(e.target.value)}
                                   onBlur={toggleEditMode} type="text"/>
                        </div>
                        :
                        <div>
                            <p onDoubleClick={toggleEditMode}>{statusText || "No status"}</p>
                        </div>
                }
            </div>
        );
    }
;

