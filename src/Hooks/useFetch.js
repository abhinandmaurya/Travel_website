import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try{
                const res = await axios.get(url);
                const data = await res?.data;
                setData(data);
                setLoading(false);
            } catch(err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);


    // const refetchData = async (url) => {
    //     setLoading(true);
    //     try{
    //         const res = await axios.get(url);
    //         setData(res.data);
    //     } catch(err) {
    //         setError(err);
    //     }
    //     setLoading(false);
    // }
    

    return { data, loading, error }
};

export default useFetch;