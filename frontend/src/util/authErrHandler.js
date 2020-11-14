export const authErrorHandler = (error, email, password, updateState) => {
    if (!email && !password) {
        updateState('Email and Password fields are empty');
    } else if (!email) {
        updateState('Email field is empty');
    } else if (!password) {
        updateState('Password field is empty');
    } else if (error.code === 'auth/wrong-password') {
        updateState('Password is incorrect');
    } else if (error.code === 'auth/user-not-found') {
        updateState('Email does not exist');
    } else if (error.code === "auth/email-already-in-use") {
        updateState('The email address is already in use');
    } else {
        updateState(error.message);
    }
}