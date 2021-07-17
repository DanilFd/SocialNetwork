import {useTypedSelector} from "../hooks/useTypedSelector";
import {Redirect} from "react-router-dom";
import {FC} from "react";
import {Loader} from "../components/shared/loader";

export const WithLoginRedirect: FC = ({children}) => {
    const {userData, isLoading} = useTypedSelector(state => state.auth)
    if (userData) return <>
        {children}
    </>
    if (isLoading) return <Loader/>
    return <Redirect to="/login"/>
};

