


import styles from "../scss/scrollview.module.scss"


enum Axis 
{
    horizontal, 
    vertical
}

interface IScrollviewProperties {

    id? : string; 

    direction: Axis; 
    children: React.ReactNode; 
}

function Scrollview(props: IScrollviewProperties) {

    const { id, children } = props; 

    return (
        <div id={ id } className={ styles.scrollview }>
        <div className={ (props.direction == Axis.horizontal) ? styles.horizontal : styles.vertical }>
        <div>
        { children }
        </div>
        </div>
        </div>
    )

}

export default Scrollview; 
export { Axis }

