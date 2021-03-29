import { Auth } from "../services/auth";

function LoginForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginForm = {
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        };
        await Auth.login(loginForm);
        e.target.reset();
    }

    return (
        <div className='row'>
            <form className='col s12' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="username" type="text" className="validate" />
                        <label htmlFor="username">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" className="materialize-textarea" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register
                        <i className="material-icons right">send</i>
                    </button>
                    <button className="btn waves-effect waves-light" type="reset" name="action">Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;
