const Register = () => {
    return (
        <div className="login-form">

            <form>
                <input name="frestName" placeholder="frestName" type={'frestName'} />
                <input name="lastName" placeholder="lastName" type={'lastName'} />
                <input name="email" placeholder="email" type={'email'} />
                <input name="password" placeholder="password" type={'password'} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;