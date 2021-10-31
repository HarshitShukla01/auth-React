import React from 'react'
import { getdata } from '../db';

const home = () => {
    const user = localStorage.getItem("kky");
    const userdata = getdata(user);
    const n = userdata[0].name;
    return (
        <div>
            <h1>Home page</h1>
            <h1>{n}</h1>
        </div>
    )
}

export default home
