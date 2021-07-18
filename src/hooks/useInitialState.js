import { useState, useEffect } from "react";




const useInitialState = (API) =>{

    //Usestate
    const [ videos, setVideos ] = useState([])

    //logica de consumo de api
    useEffect(() => {

        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))

    }, [])

    return videos;

}

export default useInitialState;