import PropTypes from "prop-types";

export const GridItem = ({title, url, id}) => {

    //console.log( props );
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GridItem.protTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}