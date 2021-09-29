import { useDispatch, useSelector } from "react-redux";
import { postRequest } from "../../api";
import { loginUserAction } from '../../redux/reducer/userReducer';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './style.css';


const LoginForm = () => {

    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
    });
    const loginUser = useSelector(state => state.user)
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (loginUser && Object.keys(loginUser).length) {
            history.push("/Home")
        }
    }, [])

    const changeHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const _handleWorkflowSave = async (e) => { //     
        e.preventDefault();//
        postRequest('loginapp', allValues)
            .then(res => {
                dispatch(loginUserAction(res.data));
                if (res.data.token) {
                    history.push("/Home")
                }
                else {
                    history.push("/Register")
                }
            })
            .catch(err => {
                console.log('err' + err);
            })
    }

    return (
        <section className='login-form'>
            <form onSubmit={_handleWorkflowSave}>
                <div className="form-main-block">
                    <div className="input-block">
                        <label>
                            <input
                                name="email"
                                placeholder="Email"
                                type="text"
                                onChange={changeHandler}
                                value={allValues.email} />
                        </label>
                    </div>
                    <div className="input-block">
                        <label>
                            <input
                                name="password"
                                placeholder="Password"
                                type="password"
                                onChange={changeHandler}
                                value={allValues.password}
                            />
                        </label>
                    </div>
                    <div><button type="submit">Login</button></div>
                </div>
            </form>
        </section>

    );
}
// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }// sa nra hamar e vor karoxanum static im uzac 
//usern vercnem dra poxaren ays pahin ogtagorcel em useSelector hooky


export default LoginForm;
