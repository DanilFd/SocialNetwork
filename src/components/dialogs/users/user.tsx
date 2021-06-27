import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

type Props = {
    name: string
    id: number
}
export const User: FC<Props> = (props) => {
    return (
        <div>
            <img style={{width: 50, borderRadius: 40}}
                 src="https://vraki.net/sites/default/files/inline/images/30_55.jpg" alt=""/>
            <NavLink to={"/messages/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
};

