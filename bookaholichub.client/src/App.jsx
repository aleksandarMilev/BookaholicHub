import React from 'react';

import Header from './components/header/Header.jsx'
import BooksSection from './components/main/books-section/BooksSection.jsx'
import AuthorsSection from './components/main/authors-section/AuthorsSection.jsx'
import ForumSection from './components/main/forum-section/ForumSection.jsx'
import LatestSection from './components/main/latest-section/LatestSection.jsx'
import Footer from './components/footer/Footer.jsx'

export default function App() {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="my-8">
                <div className="container mx-auto px-6">
                   <BooksSection/>
                    <div className="md:flex mt-8 md:-mx-4">
                        <AuthorsSection />
                        <ForumSection/>
                    </div>
                    <LatestSection/>
                </div>
               <Footer/>
            </main>
        </div>
    );
}
