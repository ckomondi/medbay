




import styles from "../scss/icon.module.scss"

interface IIconProperties 
{
    children: React.ReactNode; 
}

function Icon(props: IIconProperties) 
{

    const { children } = props; 

    return (
        <div className={ styles.icon }>
        {
            children 
        }
        </div>
    )
}


export default Icon; 



