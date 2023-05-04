import { Link } from 'react-router-dom'

import PageNotFoundImg from '../assets/images/pagenotfound.png'
import { useSetTitle } from '../hooks/useSetTitle'

export const PageNotFound = ({ title }) => {
    useSetTitle(title)
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex  flex-col items-center my-4">
                    <p className='text-7xl text-gray-700 dark:text-white font-bold my-10'>404, 0ops!</p>
                    <div className='max-w-lg'>
                        <img className='rounded' src={PageNotFoundImg} alt="404 Page Not Found" />
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <Link to="/">
                        <button className='w-64 text-xl text-white rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium transition-all ease-in-out bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-500 duration-500'>Back to Cinemate</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
