

import styles from "../../scss/home/home.module.scss"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Scrollview, { Axis } from "../../utilities/components/scrollview";

function Home() {

    return (

        <main id={ styles.main }>
            <Scrollview direction={ Axis.vertical }>

            </Scrollview>
        </main>

    )
}

export default Home; 


