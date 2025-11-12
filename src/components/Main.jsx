import { useEffect } from "react";
import axios from "axios";

export default function Main() {
    useEffect(() => {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    return
}