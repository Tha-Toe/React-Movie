import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./../../App.css";
import MovieCard from "./../movieCard/MovieCard";


const  Header = () => {

    const [movieList,setMovieList] = useState([
    {id: 1,image: "https://bit.ly/32VrkKf", title: "Spider Man 1"},
    {id: 2, image: "https://bit.ly/3HrS6cp", title: "Spider Man 2"},
    {id: 3, image: "https://bit.ly/331FU36", title: "Spider Man 3"},
    {id: 4, image: "https://bit.ly/3HqTImp", title: "Spider Man 4"},
    {id: 5, image: "https://bit.ly/3Guz8Am", title: "Spider Man 5"},
    {id: 1,image: "https://bit.ly/32VrkKf", title: "Spider Man 1"},
    {id: 2, image: "https://bit.ly/3HrS6cp", title: "Spider Man 2"},
    {id: 3, image: "https://bit.ly/331FU36", title: "Spider Man 3"},
    {id: 4, image: "https://bit.ly/3HqTImp", title: "Spider Man 4"},
    {id: 5, image: "https://bit.ly/3Guz8Am", title: "Spider Man 5"}])
    

    const [inputName,setInputName] = useState("");
    let filteredMovies = [];
    const clicked = (event) => {
        event.preventDefault();
        filteredMovies = movieList.filter(arrayElement => {
            return arrayElement.title.toLowerCase().includes(inputName);
        })
    }
    const movies = movieList.map(name =><MovieCard name = {name}/>)

    return (
        <div className = "header">
            <form onSubmit= {clicked}>
                <div className = "headerChild">React Movie Store</div>
                <div className = "searchTag">
                    <input className = "form-control searchBar" onChange={event => setInputName(event.target.value.toLowerCase())} type="text" placeholder = "Enter Movie Name"/>
                    <button className ="btn btn-danger" >Search</button>
                </div>
            </form>
            <div className="mCardContainer">{movies}</div>
        </div>
    )
}

export default Header;