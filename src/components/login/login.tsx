import {SubmitHandler, useForm} from "react-hook-form";
import {postLoginThunk} from "../../redux/asyncActions/auth";
import {useDispatch} from "react-redux";

interface IFormLogin {
    email: string,
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<IFormLogin>()
    const onSubmit: SubmitHandler<IFormLogin> = data => dispatch(postLoginThunk({...data, captcha: true}))
    return (
        <div style={{minHeight: "85vh"}} className="text-white d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 m-auto p-5 bg-secondary"
                  action="">
                <p className="text-center">Please login</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputLogin1" className="form-label">Login</label>
                    <input  {...register("email", {required: true})} type="login"
                            className={`form-control ${errors.email && "is-invalid"}`}
                            id="exampleInputLogin1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input autoComplete="on" {...register("password", {required: "fileIsEmpty"})} type="password"
                           className={`form-control ${errors.password && "is-invalid"}`}
                           id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input {...register("rememberMe")} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label htmlFor="exampleCheck1" className="form-check-label">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

