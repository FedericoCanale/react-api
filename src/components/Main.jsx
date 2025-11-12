import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
    const [chars, setChars] = useState([]);

    function fetchChars() {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => setChars(res.data.results));
    }

    useEffect(fetchChars, []);

    return (
        <ul>
            {chars.map((char) => (
                <li>
                    <img src={char.image} alt="" />
                    {char.name}
                </li>
            ))}
        </ul>
    );
}