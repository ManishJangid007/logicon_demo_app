import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
    const [formData, setFormData] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handelChange = (event) => {
        setFormData(preVal => ({
            ...preVal,
            [event.target.name]: event.target.value
        }))
    }

    const handelSubmit = (event) => {
        event.preventDefault();


        // send data to server
    }

    return (
        <main>
            <div className="login--div">
                <form onSubmit={(e) => handelSubmit(e)}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={(e) => handelChange(e)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={(e) => handelChange(e)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </main>
    )
}