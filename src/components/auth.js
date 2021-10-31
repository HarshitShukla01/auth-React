import { googleLogin } from '../firebase'
import { insertdata,readdata } from '../db';
export const authcheck = () =>{
    return true;
}

export const loginGoogle = async () => {
    const user = await googleLogin();
    //const user = result.user;
    console.log(user.displayName)
    const keyid = user.uid;
    if(!readdata(keyid)){
        insertdata(user.displayName,keyid);
    }
    localStorage.setItem("kky",keyid);
}