import React from "react";

interface GreetingProps {
    enteredName: string;
    message: string;
    greetingDispatcher: React.Dispatch<{ type: string, payload: string }>;
}

export default function Greeting(props: GreetingProps) {

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({ type: "enteredName", payload: e.target.value });
        props.greetingDispatcher({ type: "message", payload: e.target.value });
      }

    return (<div>
            <input value={props.enteredName} onChange={onChangeName} />
            <div>
                {props.message}
            </div>
        </div>);    
}
// const Greeting: React.FC<GreetingProps> = ({name}: GreetingProps) => {
//     const [message, setMessage] = React.useState('')

//     React.useEffect(() => {
//         if( name ) {
//             setMessage(`Hello from, ${name}`)

//         }
//     }, [name])
//     if(!name) {
//         return <div>no name given :(</div>

//     }
//     return (
//         <div>
//             {message}
//         </div>
//     )
// }
