export default function AuthorsSection() {
    return (
        <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{ backgroundImage: "url('https://www.bookishelf.com/wp-content/uploads/2018/03/Top-10-Authors-1.jpg')" }}
        >
            <div className="bg-gray-900 bg-opacity-80 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">Authors</h2>
                    <p className="mt-2 text-white">View biography, bibliography, interesting facts and much more about all authors ever born (yes, all).</p>
                    <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                        <span>Atuhors</span>
                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}