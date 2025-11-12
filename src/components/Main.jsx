import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
    const [people, setPeople] = useState([]);

    const actressApi = "https://lanciweb.github.io/demo/api/actresses/";
    const actorApi = "https://lanciweb.github.io/demo/api/actors/";

    useEffect(() => {
        axios.get(actressApi).then((res1) => {
            axios.get(actorApi).then((res2) => {
                const all = [...res1.data, ...res2.data];
                setPeople(all);
            });
        });
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5 title">Lista completa attori e attrici</h1>

            <div className="row">
                {people.map((person, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card person-card h-100 shadow-sm">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="card-img-top person-img"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">Anno di nascita: {person.birth_year}</p>
                                <p className="card-text">Nazionalità: {person.nationality}</p>
                                <p className="card-text small-text">
                                    <strong>Biografia:</strong> {person.biography}
                                </p>
                                <p className="card-text">
                                    <strong>Riconoscimenti:</strong>{" "}
                                    {Array.isArray(person.awards) ? person.awards.join(", ") : person.awards}
                                </p>
                                {person.most_famous_movies && (
                                    <p className="card-text">
                                        <strong>Film più famosi:</strong>{" "}
                                        {person.most_famous_movies.join(", ")}
                                    </p>
                                )}
                                {person.known_for && (
                                    <p className="card-text">
                                        <strong>Film più famosi:</strong>{" "}
                                        {person.known_for.join(", ")}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}