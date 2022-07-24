

import { useContext } from "react";
import styles from "../../scss/navbar/navbar.module.scss"
import { ClientContext } from "../_app";



function ProfileIcon() {

    const user = useContext(ClientContext);

    return (
        <div className={ styles.profileIcon } >
            <p>A</p>
        </div>
    )


}

export default ProfileIcon; 





