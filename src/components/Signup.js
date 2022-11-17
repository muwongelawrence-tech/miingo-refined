import FormAction from "./FormAction";
import Input from "./Input";
import { signupFields } from "../constants/formFields"
import { useState } from 'react';

const fields = [...signupFields];
let fieldsState = {};

fields.forEach( field => fieldsState[field.id] = '' );

export default function Signup () {
  const [signupState, setSignupState] = useState( fieldsState );
  // console.log(signupState);

  const handleChange = ( e ) => setSignupState( { ...signupState, [e.target.id]: e.target.value } );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log( signupState )
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = () => {
    
   }

  return (
    <form onSubmit={handleSubmit}>
      {
        fields.map( field => <Input key={field.id} field={field} handleChange={handleChange}
          id={field.id}
          name={field.name}
          type={field.type}
          autoComplete={field.autoComplete}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
          value={signupState[field.id]}
        /> )
      }
      <FormAction handleSubmit={handleSubmit} text="Signup" />
    </form>
  )
}
