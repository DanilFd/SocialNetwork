import React from 'react';
import {User} from './user';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Users = () => {
    const {users} = useTypedSelector(state => state.usersPage)
    return (
        <div>
            <h3 className="h3 p-3 text-primary">Users:</h3>
            <div>
                {users.map(u => <User key={u.id} followed={u.followed} fullName={u.fullName} status={u.status}
                                      location={u.location} userId={u.id}/>)}
            </div>
        </div>
    );
};

