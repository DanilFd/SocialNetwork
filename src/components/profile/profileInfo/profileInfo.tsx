import React from 'react';
import {Loader} from "../../shared/loader";
import {Profile as ProfileType} from "../../../types/types";

type Props = {
    profile: ProfileType | null
}

export const ProfileInfo = ({profile}: Props) => {


    return (
        <>
            {!profile ? <Loader/> : <div className="card mb-3 bg-secondary" style={{maxWidth: 540}}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img style={{maxWidth: "100%", maxHeight: "100%", borderRadius: 20}}
                             src={profile.photos.large || "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"}
                             alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{profile.fullName}</h5>
                            <p className="card-text">{profile.aboutMe}</p>
                            <p className="card-text">{profile.lookingForAJobDescription}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </>

    );
};

