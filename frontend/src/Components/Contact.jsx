import React, { useState } from 'react';

const Contact = () => {

    const [status, setStatus] = useState("")

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS")
          } else {
            setStatus("ERROR")
          }
         
        };
        xhr.send(data);
    }




    return (
        <div>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h3 className="">
                            Contact Us
                        </h3>

                        <form
                            onSubmit={submitForm}
                            action="https://formspree.io/f/xwkwbwnd"
                            method="POST"
                        >
                             <label>Email:
                            <input type="email" name="email" />
                            </label>

                            <label>Message:
                            <input type="text" name="message" />
                            </label>
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Contact;