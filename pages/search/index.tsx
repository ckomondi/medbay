



import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ItemType from "../../models/item";
import styles from "../../scss/search.module.scss"
import Icon from "../../utilities/components/icon";


class SearchItem
{

    type: ItemType; 
    text: string; 
    link: string; 

    constructor(_type: ItemType, _name: string, _link: string) 
    {
        this.type = _type; 
        this.text = _name; 
        this.link = _link; 
    }
}


function Search() {


    const router = useRouter(); 

    const searches = useMemo(() => {

        return [
            new SearchItem(ItemType.search, "This is a search", "/search/me"), 
            new SearchItem(ItemType.search, "This is the seconds", "/search/me"), 
            new SearchItem(ItemType.search, "To", "/search/me"), 
            new SearchItem(ItemType.search, "Sizer", "/search/me"), 
        ]

    }, []); 

    const onCommit = useCallback((event: React.KeyboardEvent<HTMLTextAreaElement>) => {

        event.preventDefault(); 
        const text = event.target.value; 

        if (text.length <= 0) { return; }

        const path = encodeURIComponent(text); 
        router.push(`/search/${ path }`); 

    }, []); 

    return (
        <main id={ styles.main }>

            <textarea
                className={ styles.searchfield }
                placeholder="Type to search ..."
                cols={ 50 }
                onKeyDown = { (event) => {
                    if (event.key == "Enter") { onCommit(event) }
                }}
            ></textarea>

            <div className={ styles.history }>
            {
                searches.map((item, itemIndex) => 
                    <HistoryItem item={ item } key={ itemIndex } />
                )
            }
            </div>
        </main>
    )
}


interface IHistoryItemProperties 
{
    item: SearchItem; 
}

function HistoryItem(props: IHistoryItemProperties) {

    const { item } = props; 

    return (
        <div className={ styles.item }>

            <Icon>
            <svg viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
            </svg>
            </Icon>

            <p>{ item.text }</p>
        </div>
    )
}





export default Search; 




