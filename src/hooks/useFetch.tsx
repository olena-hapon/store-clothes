import { useEffect, useState } from "react"
import { makeRequest } from "../helpers/makeRequest";
// import Categories from "../Types/Categories";

interface Categories {
  attributes: {
    title: string;
      desc: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
    id: number;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<Categories[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await makeRequest.get(url);
        const add = res.data.data;
        console.log(add)
        setData(add);
      }
      catch (error: any){
        setError(error)
      }
      setLoading(false);
    };
    fetchData();
  }, [url, setData])

  return {data, loading, error};
};

export default useFetch