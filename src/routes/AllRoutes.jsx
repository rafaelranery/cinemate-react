import { Routes, Route } from "react-router-dom";

import { MovieList, MovieDetail, PageNotFound, Search } from '../pages'

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <main>
                <Routes>
                    {/* Iremos passar a url específica de cada fetch como props para os elementos das rotas */}
                    {/* Movies List API Pages */}
                    <Route path="/" element={<MovieList apiPath='movie/now_playing' title='Cinemate | Home'/>} />
                    <Route path="/movies/popular" element={<MovieList apiPath='movie/popular' title='Cinemate | Popular'/>} />
                    <Route path="/movies/top" element={<MovieList apiPath='movie/top_rated' title='Cinemate | Top Rated'/>} />
                    <Route path="/movies/upcoming" element={<MovieList apiPath='movie/upcoming' title='Cinemate | Upcoming'/>} />
                    {/* Movie Detail API */}
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    {/* Search API page */}
                    <Route path="/search" element={<Search apiPath='search/movie' />} />
                    {/* NotFound */}
                    <Route path="*" element={<PageNotFound title='Cinemate | 404' />} />
                </Routes>
            </main>
        </div>
    )
}
