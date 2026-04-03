import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>    
        <div className="modal modal-sheet position-static d-block p-4 py-md-5"
                tabindex="-1"
                role="dialog"
                id="modalSignin">

            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">

                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-2">Register</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body p-5 pt-0">

                    <form>

                    <div className="form-floating mb-3">
                        <input
                        type="email"
                        className="form-control rounded-3"
                        id="floatingInput"
                        placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                        type="password"
                        className="form-control rounded-3"
                        id="floatingPassword"
                        placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button
                        className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                        type="submit">
                        Register
                    </button>

                    <hr className="my-4" />

                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>

                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3">
                        Register up with Google
                    </button>

                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3">
                        Register with Facebook
                    </button>

                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3">
                        Register with GitHub
                    </button>

                    </form>

                    <p>
                        I have an account? <Link to="/login">Login here</Link>
                    </p>

                </div>

                </div>
            </div>

            </div>
        </>
    )
}