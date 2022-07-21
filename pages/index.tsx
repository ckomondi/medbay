




import styles from "../scss/home.module.scss"
import Scrollview, { Axis } from "../utilities/components/scrollview";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";


function Home() {

    return (

        <main id={ styles.main }>
            <Scrollview direction={ Axis.vertical }>
                <h1 className="subtitle">Good Evening, Shanaa</h1>
            </Scrollview>
        </main>

    )
}

// #region Map View
function MapView() {

    const mapReference = useRef<HTMLElement>(null); 
    const [map, setMap] = useState<google.maps.Map>(); 

    useEffect(() => {

        if (!mapReference.current) { return }

        const mapView = new window.google.maps.Map(mapReference.current, {
            zoom: 12, 
            center: { lat: 29.7604, lng:  -95.3698 }
        }); 

        setMap(mapView); 

    }, [mapReference, map]); 


    return (
        <section className={ styles.map } ref={ mapReference }></section>
    )

}
// #endregion











export default Home; 






