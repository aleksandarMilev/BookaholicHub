export default function Navigation() {
    return (
        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
            <div className="flex flex-col sm:flex-row">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Books</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Authors</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Forum</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Articles</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contacts</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Login</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Register</a>
            </div>
        </nav>
    );
}