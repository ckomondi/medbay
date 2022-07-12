



import styles from "../../styles/search.module.scss"


function Search() {


    return (
        <main id={ styles.main }>
            <input className={ styles.searchfield } type="text" placeholder="Type to search ..." />

            <div className={ styles.history }>

            </div>
        </main>
    )
}


function HistoryItem() {




}


function HistoryItemIcon() {
    
}





export default Search; 




