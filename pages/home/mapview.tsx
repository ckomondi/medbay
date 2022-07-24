

import styles from "../../scss/home/mapview.module.scss"
import { useEffect, useRef, useState } from "react";



interface IMapViewProperties {

}

function Mapview(props: IMapViewProperties) {


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


export default Mapview; 




