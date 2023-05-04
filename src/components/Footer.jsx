import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' className="hover:underline">Cinemate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/rn.rfl_/" target="_blank" className="mr-4 hover:underline md:mr-6 " rel="noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rafael-rapizo-nery-4434a0161/" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/rafaelranery" target="_blank" className="hover:underline" rel="noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
