"use client"
import { useState } from "react";

const Button = () => {
    const [login, setLogin] = useState<boolean>(true);
    return (
        <div>
            {login ? <h1>About Page</h1> : null}
            <button onClick={() => setLogin(!login)}>Click</button>
            <br />
        </div>
    )
}
export default Button;