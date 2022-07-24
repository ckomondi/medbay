




import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react';
import "../scss/app/global.scss"
import { authentication } from '../web/firebase';
import Navbar from './nav/navbar';
import { onAuthStateChanged, signInAnonymously } from "firebase/auth"
import Client from '../models/client';



const ClientContext = createContext<Client | undefined>(undefined); 


function App({ Component, pageProps } : AppProps) {

    const [client, setClient] = useState<Client | undefined>(undefined); 

    useEffect(() => {
        
        onAuthStateChanged(authentication, (user) => {
            
            if (!user) { signInAnonymously(authentication); return }

            const client = new Client(user);
            setClient(client); 
        })

    }, []); 

    return (
    <ClientContext.Provider value={ client } >
        <Navbar />
        <Component {...pageProps} />
    </ClientContext.Provider>
    )

}

export default App; 
export { ClientContext }






