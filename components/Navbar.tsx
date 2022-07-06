


import styles from "../styles/Navbar.module.css"


function Navbar() { 
    return ( 
        <nav className={ styles.nav }>
            <Logo />

            <Navigation />
        </nav>
    )

}


function Logo() { 
    return ( 

        <div id={ styles.logo }>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.22485 11.5245H11.3846C11.4894 11.5245 11.593 11.5026 11.6888 11.46C11.7845 11.4174 11.8702 11.3551 11.9403 11.2773L13.3286 9.7009C13.3559 9.66844 13.3902 9.64253 13.4288 9.62509C13.4675 9.60765 13.5096 9.59914 13.552 9.60018C13.5945 9.60122 13.6361 9.61179 13.6738 9.6311C13.7116 9.65041 13.7446 9.67797 13.7702 9.71173L16.7943 13.4773C16.8614 13.5633 16.9463 13.6337 17.0433 13.6838C17.1402 13.7339 17.2469 13.7625 17.3559 13.7675C17.4592 13.7665 17.5611 13.744 17.6551 13.7014C17.7491 13.6588 17.8332 13.597 17.902 13.5201L19.7364 11.503C19.7631 11.473 19.7958 11.4488 19.8325 11.4322C19.8691 11.4155 19.9088 11.4067 19.9491 11.4063H21.0669" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6975 7.02811C18.5102 6.68415 18.2829 6.36351 18.0202 6.07286C17.2017 5.22234 16.1292 4.75391 15 4.75391C13.8707 4.75391 12.7983 5.22249 11.9691 6.08486C11.8998 6.16311 11.8146 6.22565 11.7191 6.26828C11.6236 6.31092 11.5201 6.33266 11.4155 6.33205C11.3109 6.33144 11.2076 6.30849 11.1126 6.26474C11.0176 6.221 10.9331 6.15747 10.8647 6.07842C10.056 5.19703 8.98159 4.71191 7.83969 4.71191C6.69778 4.71191 5.62333 5.19702 4.81412 6.07861C4.00186 6.96957 3.55798 8.14408 3.55835 9.39297C3.55855 10.644 4.00454 11.82 4.81412 12.7045L10.4481 18.8627C10.7083 19.1449 11.0535 19.3002 11.4198 19.3002C11.7905 19.3002 12.1385 19.1415 12.3988 18.8549L14.4472 16.6158" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    )

}

function Navigation() { 

    return ( 

    <div id={ styles.navigation }>

        <div className={ styles.navicon }>
        <svg viewBox="0 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21L15.6034 16.6034M3 11.3276C3 7.28067 6.28067 4 10.3276 4C14.3745 4 17.6552 7.28067 17.6552 11.3276C17.6552 15.3745 14.3745 18.6552 10.3276 18.6552C6.28067 18.6552 3 15.3745 3 11.3276Z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        <div className={ styles.navicon }>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.21094 9.55576V6.52376C7.21594 5.29476 7.69094 4.16076 8.54994 3.31076C9.40794 2.45976 10.5599 2.03476 11.7539 1.99976C14.2449 1.99976 16.2729 4.02976 16.2729 6.52376V9.55576" stroke-linecap="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00776 7.05566C5.07376 7.05566 3.49976 8.62766 3.49976 10.5607V16.0767C3.49976 18.0087 5.07376 19.5807 7.00776 19.5807H16.4918C18.4258 19.5807 19.9998 18.0087 19.9998 16.0767V10.5607C19.9998 8.62766 18.4258 7.05566 16.4918 7.05566H7.00776Z"/>
        </svg>
        </div>
    </div>
    )
}


export default Navbar





