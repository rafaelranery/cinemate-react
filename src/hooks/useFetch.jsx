import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&query=${queryTerm}`

  useEffect(() => {
    setIsLoading(true)
    async function fetchMovie() {
      const res = await fetch(url);
      const json = await res.json();
      const result = await json.results;
      setData([...result])
      setIsLoading(false)
    }
    fetchMovie()
  }, [url])


  return { data, isLoading }
}
