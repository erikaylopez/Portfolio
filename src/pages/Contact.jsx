import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
//import { useForm } from 'react-hook-form';




export default function Contact() {


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
   
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            alert("message sent!!!!!!")
            setFormState({ name: '', email: '', message: '' });
        };
    };

    const handleChange = (e) => {
        console.log(e.target.name)

        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div>
            <p className="content is-medium">Contact Me</p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} id="hello"/>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email Address</label>
                    <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

