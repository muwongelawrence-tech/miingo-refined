import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { loginFields } from "../constants/formFields";
import { useState } from 'react';

const fields = [...loginFields];
let fieldsState = {};
fields.forEach( field => fieldsState[field.id] = '' );

export default function Signin () {
    const [loginState, setLoginState] = useState( fieldsState );

    const handleChange = ( e ) => {
        setLoginState( { ...loginState, [e.target.id]: e.target.value } )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        authenticateUser();

        console.log( "DATA: ", loginState );
    }

    //Handle Login API Integration here
    const authenticateUser = () => {
        console.log( "AUTHENTICATE USER" );

        const { email, password } = loginState;
        const data = { email, password };
        const url = "https://api.miingoapp.com/auth/signin";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( data )
        }

        fetch( url, options )
            .then( res => res.json() )
            .then( data => {
                console.log( data )

            } )
            .catch( err => console.log( err ) );

    }

    const textFields = []
    fields.forEach( field => {
        if ( field.type === 'text' )
            textFields.push( field )
    } )

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">

                {
                    fields.map( field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Signin" />

        </form>
    )
}

