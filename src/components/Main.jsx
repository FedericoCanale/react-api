import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
    const [acts, setActs] = useState([]);

    useEffect(() => { // add useEfffect to catch the api contenent 
        axios
            .get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => setActs(res.data))
            .catch((err) => console.error(err));
    }, []);

    return ( // Starting to create the card with required infos
        <div>
            {acts.map((act, index) => (
                <div key={index}>
                    <h3>{act.name}</h3>
                    <img src={act.image} alt={act.name} width="150" />
                    <p>Year of birth: {act.birth_year}</p>
                    <p>Nationality: {act.nationality}</p>
                    <p>Biography: {act.biography}</p>
                    <p>Awards: {act.awards}</p>
                </div>
            ))}
        </div>
    );
}