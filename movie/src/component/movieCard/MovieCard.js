import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const  MovieCard = (props) => {
    console.log(props);
    const {name} = props;
    return (
            <div className="mCard">
                <img src = {name.image} className="mImg"/>
                <div className="mTitle" >{name.title}</div>
            </div>
    )
}
export default MovieCard;