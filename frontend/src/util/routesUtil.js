import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../providers/AuthContext'


export const AuthRoute = (props) => {
    const { currentUser } = useContext(AuthContext)
    return (
        <Route
            render={() => {
                return !currentUser ? <props.component /> : <Redirect to='/' />
            }}
        />
    )
}