import React, {FC} from 'react';

type Props = {
    message: string
}
export const Message: FC<Props> = (props) => {
    return (
        <div>
            <p>
                {props.message}
            </p>
        </div>
    );
};

