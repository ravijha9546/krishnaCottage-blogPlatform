
import './SignInModal.css'
export const SignInModal= ({onClose}) =>{
    return (
        <>
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Welcome Back</h2>
                <div className="signup-options">
                    <button className="signup-button google">Sign in with Google</button>
                    <button className="signup-button email">Sign in with email</button>
                </div>
                <p>No account? <a href="#">Create One</a></p>
                <p>Forget email or trouble signing in? <a href="#">Get Help</a></p>
            </div>
        </div>
        </>
    )

}