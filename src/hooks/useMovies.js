import { useState } from "react"

export const useMovies = () => {
    const [dataMovies, setDataMovies] = useState();
    const [isLoading, setIsLoading] = useState(null);

    const takeMovies = async (url) => {
        try{
            setIsLoading(true);
            const res = await fetch(url);
            const data = await res.json();

            if(!res.ok) throw {state: res.state};
            setDataMovies(data);
        }catch(err){
            console.log("Ha ocurrido un error. Error " + err.state);
        }finally{
            setIsLoading(false);
        }
    }

    return {
        ...dataMovies,
        dataMovies,
        isLoading,
        takeMovies
    }
}