



import styles from "../styles/Scrollview.module.css"



enum Axis 
{
    horizontal, 
    vertical
}

interface IScrollviewProps 
{
    direction: Axis;
    content: React.ReactNode; 
    id? : string
}

function Scrollview(props: IScrollviewProps)
{
    const { id, content } = props

    return (

        <div id={ id } className={ styles.scrollview }>
        <div className={ (props.direction == Axis.horizontal) ? styles.horizontal : styles.vertical }>
        <div>
        {
            content
        }   
        </div>
        </div>
        </div>
    )

}

export { Axis }
export default Scrollview




