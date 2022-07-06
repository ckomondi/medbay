

import Navbar from "../components/Navbar"
import Scrollview, { Axis } from "../utilities/components/Scrollview"
import styles from "../styles/pages/Home.module.css"



function HomePage()
{
    return ( 

    <>
    

        <Navbar />

        <Scrollview id={ styles.home } direction={ Axis.vertical } content=
        {

            <p>Hello wolrd</p>

        }/>

    </> )
}


export default HomePage




