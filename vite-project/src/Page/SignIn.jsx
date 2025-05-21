import './SignIn.scss'
import { Link } from 'react-router'
import LoginForm from '../Component/Form'

function SignIn() {
    return (
        <main class="main bg-dark">
            <section class="sign-in-content">
                <LoginForm/>
            </section>
        </main>
    )
}
    

export default SignIn;