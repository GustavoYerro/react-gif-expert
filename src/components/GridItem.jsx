
export const GridItem = ({title, url}) => {

    //console.log( props );
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
