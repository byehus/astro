import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greetings({message}) {
    
    const randomMessage = () => message[(Math.floor(Math.random() * message.lenght))];
    
    const [greeting, setGreeting] = useState(message[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
        </div>
    );
}


