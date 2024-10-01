export default function BookSection() {
    return (
        <div
            className="h-64 rounded-md overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg')" }}
        >
            <div className="bg-gray-900 bg-opacity-80 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">Books</h2>
                    <p className="mt-2 text-white">Here you can get reviews, summaries and discussions about all books ever written (no joke :) ).</p>
                    <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Books</span>
                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}