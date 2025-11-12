import { useState, useEffect } from "react";
import axios from "axios";


export default function Main() {
    const [actresses, setActresses] = useState([]);
    const [actors, setActors] = useState([]);

    const actressApi = "https://lanciweb.github.io/demo/api/actresses/";
    const actorApi = "https://lanciweb.github.io/demo/api/actors/";

    useEffect(() => {
        // Chiamata API per le attrici
        axios
            .get(actressApi)
            .then((res) => setActresses(res.data))
            .catch((err) => console.error(err));

        // Chiamata API per gli attori
        axios
            .get(actorApi)
            .then((res) => setActors(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container my-4">
            {/* Lista Attrici */}
            <h1 className="text-center mb-4">Lista Attrici</h1>
            <div className="row">
                {actresses.map((act, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card actress-card h-100 text-center">
                            <img
                                src={act.image}
                                alt={act.name}
                                className="card-img-top actress-img"
                            />
                            <div className="card-body-actress">
                                <h5 className="card-title">{act.name}</h5>
                                <p className="card-text">Anno di nascita: {act.birth_year}</p>
                                <p className="card-text">Nazionalità: {act.nationality}</p>
                                <p className="card-text">Biografia: {act.biography}</p>
                                <p className="card-text">Riconoscimenti: {act.awards}</p>
                                <p className="card-text">
                                    Film più famosi: {act.most_famous_movies.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lista Attori */}
            <h1 className="text-center mb-4 mt-5">Lista Attori</h1>
            <div className="row">
                {actors.map((act, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card actor-card h-100 text-center">
                            <img
                                src={act.image}
                                alt={act.name}
                                className="card-img-top actor-img"
                            />
                            <div className="card-body-actor">
                                <h5 className="card-title">{act.name}</h5>
                                <p className="card-text">Anno di nascita: {act.birth_year}</p>
                                <p className="card-text">Nazionalità: {act.nationality}</p>
                                <p className="card-text">Biografia: {act.biography}</p>
                                <p className="card-text">Riconoscimenti: {act.awards}</p>
                                <p className="card-text">
                                    Film più famosi: {act.known_for.join(", ")}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}