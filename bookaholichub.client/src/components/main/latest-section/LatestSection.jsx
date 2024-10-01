import React from 'react';

export default function LatestSection() {
    let articles = [
        {
            imageUrl: "https://miro.medium.com/v2/resize:fit:700/1*maUIr7hDI6qj9wpV8Uu9Rg.png",
            title: "Stephen King: What do you don't know about the King of the Horror?",
            minutesToRead: "20",
        },
        {
            imageUrl: "https://s3.amazonaws.com/adg-bucket/1984-george-orwell/3423-medium.jpg",
            title: "1984: Are Orwell's predictions fact today?",
            minutesToRead: "12",
        },
        {
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
            title: "'The boy who lived': Harry Potter for advanced (if you are not a muggle).",
            minutesToRead: "15",
        },
        {
            imageUrl: "https://book-assets.openroadmedia.com/9781480477063.jpg",
            title: "Gothic: Why we all love it?",
            minutesToRead: "18",
        },
    ];

    return (
        <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Latest articles:</h3>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {articles.map((article, index) => (
                    <div key={index} className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden"> {/* Changed max-w-sm to max-w-md */}
                        {/* Image Section */}
                        <div className="flex items-end justify-end h-72 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url('${article.imageUrl}')` }}> {/* Increased height */}
                            <button className="p-3 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 19.5A2.5 2.5 0 006.5 17H20"></path>
                                    <path d="M4 4.5A2.5 2.5 0 016.5 2H20v13H6.5a2.5 2.5 0 00-2.5 2.5v0"></path>
                                    <path d="M20 2v13"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="px-6 py-4"> {/* Increased padding */}
                            <h3 className="text-gray-700 text-lg">{article.title}</h3> {/* Increased text size */}
                            <span className="text-gray-500 mt-2 block">Read for: {article.minutesToRead} minutes</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};
