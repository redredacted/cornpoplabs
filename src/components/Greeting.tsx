import { createSignal } from "solid-js";

export default function Greeting(props: { greetings: string | any[]; }) {
    const randomMessage = () => props.greetings[(Math.floor(Math.random() * props.greetings.length))];
    const [greeting, setGreeting] = createSignal(randomMessage());

    return (
	<>
	    <h3>{greeting}! Thank you for visiting!</h3>
	    <button onClick={() => setGreeting(randomMessage)}>
	        New Greeting
	    </button>
	</>
    );
}
