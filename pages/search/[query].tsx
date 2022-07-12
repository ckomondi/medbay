



import { useRouter } from "next/router";
import { useMemo } from "react";

import styles from "../../styles/query.module.scss"


function Query() {

    const router = useRouter();
    const { query } = router.query; 



    return (
        <main id={ styles.main }>
            <h3 className={ styles.auto }>Showing results for <span className={ styles.correct }>Influenza</span> did you mean <span className={ styles.query }>Influenzan</span></h3>
        
            <QueryHighlight />

            
        
        
        </main>
    )
}

function QueryHighlight() {
    return (
        <div className={ styles.showcase }></div>
    )
}


export default Query; 





