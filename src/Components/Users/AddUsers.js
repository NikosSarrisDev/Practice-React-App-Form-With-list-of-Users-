import React ,{useState} from 'react'
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import { ErrorModal } from '../UI/ErrorModal';

export const AddUsers = (props) => {

    const [enteredUsername , setEnteredUsername] = useState("");//React useState Hook for Username 
    const [enteredAge , setEnteredAge ] = useState("");//React useState Hook for Age
    const [error , setError] = useState();

    const AppendUserHandler = (event) => {//Event Handler for Submit 

        /*
        Here we have the if statements in order to Check if the Username and Age are valid.
        Also here is where we reseting the input values from username and age after Sumbmission
        */

        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){//Checks if the Username and Age are empty strings 
            setError({//This is responsible for re-rendering the error message
                title : "Invalid message",
                message : "Please enter a valid name and age (non-empty value)."
            })

            return;
        }
        if (+enteredAge < 1){//Checks if the Age is lower than 1
            setError({
                title : "Invalid",
                message : "please enter a valid age ( > 0 )"
            })

            return;
        }
        props.onAddUser(enteredUsername , enteredAge);

        setEnteredUsername("");//reset the values after submiton
        setEnteredAge("");// reset the values after submition

    }

    const usernameChangeHandler = (event) => {//Event Handler for Username

        setEnteredUsername(event.target.value);

    }

    const ageChangeHandler = (event) => {//Event Handler for Age

        setEnteredAge(event.target.value);

    }

    const errorHandler = () => {
        setError(null);
    }

  return (
    <>
    {error &&<ErrorModal onConfirmed={errorHandler} title={error.title} message={error.message} />}
    <Card className="input">
    <form onSubmit={AppendUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id = "username" type = "text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor='username'>Age (Years)</label>
        <input id = "username" type = "number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
  )
}
