// Create 404 page
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-sky-700 p-6">
            <h1 className="text-lg md:text-2xl xl:text-3xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl xl:text-2xl mb-2">Oops! The page you are looking for does not exist.</p>
            <p className="text-md md:text-lg xl:text-xl mb-6">
                You might have mistyped the address or the page may have been moved.
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;