import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../util/firebaseFunctions'
import firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { uiConfig } from '../util/firebaseFunctions'
import { Form, Button } from 'react-bootstrap'
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            history.push('/')
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div className='login-container'>

            <div className='login-left'>
            </div>


            <div className="login p-1">

                {error ? <div>{error}</div> : null}


                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="formBasicEmail">

                        <Form.Label>Email address</Form.Label>
                        <div>
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                            </svg>

                            <Form.Control type="email" placeholder='Enter email'
                                placeholder='Email'
                                value={email}
                                style={{ paddingLeft: '30px' }}
                                onChange={(e) => setEmail(e.currentTarget.value)}

                            />
                        </div>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <div>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                            </svg>

                            <Form.Control placeholder='Password'
                                type="password"
                                value={password}
                                style={{ paddingLeft: '30px' }}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                autoComplete='on' />

                        </div>
                    </Form.Group>




                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>





                <div className='signup-google'>
                    <span>or Sign Up Using</span>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>



                <div>
                    New to VidaVeloz?   <button className='signup-link'> Create An Account</button>

                </div>

            </div>







        </div>

    )
}


export default Login;