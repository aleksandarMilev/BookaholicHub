import React, { useState } from 'react';

export default function Home() {
    let [cartOpen, setCartOpen] = useState(false);
    let [isOpen, setIsOpen] = useState(false);

    return (
       <h1>Hello World!</h1>
    );
}
