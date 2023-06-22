[Turn Back](../../../)

<h1 align="center">Ders40 - React Forms</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## Contents:

  - [Categories](#categories)
    - [React Forms](#react-forms)
      - [Adding Forms in React](#adding-forms-in-react)
      - [Handling Forms](#handling-forms)
      - [Submitting Forms](#submitting-forms)
      - [Multiple Input Fields](#multiple-input-fields)
      - [Textarea](#textarea)
      - [Select](#select)
    - [Formik](#formik)
    - [Yup](#yup)
    - [Example Website](#example-website)

## React Forms

&#10145; Just like in HTML, React uses forms to allow users to interact with the web page.

### Adding Forms in React

&#10145; You add a form with React like any other element:

#### Example

    Add a form that allows users to enter their name:

      function MyForm() {
      return (
        <form>
          <label>Enter your name:
            <input type="text" />
          </label>
        </form>
      )
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);

&#10145; This will work as normal, the form will submit and the page will refresh.

&#10145; But this is generally not what we want to happen in React.

&#10145; We want to prevent this default behavior and let React control the form.

### Handling Forms

&#10145; Handling forms is about how you handle the data when it changes value or gets submitted.

&#10145; In HTML, form data is usually handled by the DOM.

&#10145; In React, form data is usually handled by the components.

&#10145; When the data is handled by the components, all the data is stored in the component state.

&#10145; You can control changes by adding event handlers in the ``onChange`` attribute.

&#10145; We can use the ``useState ``Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

#### Example

    Use the useState Hook to manage the input:

      import { useState } from 'react';
      import ReactDOM from 'react-dom/client';

      function MyForm() {
        const [name, setName] = useState("");

        return (
          <form>
            <label>Enter your name:
              <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </form>
        )
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<MyForm />);

### Submitting Forms

&#10146; You can control the submit action by adding an event handler in the ``onSubmit`` attribute for the ``<form>``:`

#### Example

    Add a submit button and an event handler in the ``onSubmit`` attribute:

      import { useState } from 'react';
      import ReactDOM from 'react-dom/client';

      function MyForm() {
        const [name, setName] = useState("");

        const handleSubmit = (evt) => {
          evt.preventDefault();
          alert(`Submitting Name ${name}`)
        }

        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<MyForm />);

### Multiple Input Fields

&#10146; You can control the values of more than one input field by adding a name attribute to each element.

&#10146; We will initialize our state with an empty object.

&#10146; To access the fields in the event handler use the event.target.name and event.target.value syntax.

&#10146; To update the state, use square brackets [bracket notation] around the property name.

#### Example

    Write a form with two input fields:

      import { useState } from 'react';
      import ReactDOM from 'react-dom/client';

      function MyForm() {
        const [formState, setFormState] = useState({name: "", age: ""});

        const handleSubmit = (evt) => {
          evt.preventDefault();
          alert(`Submitting Name ${formState.name}`)
        }

        const handleChange = (evt) => {
          const value = evt.target.value;
          const name = event.target.name;
          setFormState({
            ...formState,
            [name]: value
          });
        }

        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
            </label>
            <label>Enter your age:
              <input
                type="text" 
                name="age"
                value={formState.age}
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<MyForm />);

<b>Note</b>&#10071; We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.

### Textarea

&#10146; The textarea element in React is slightly different from ordinary HTML.

&#10146; In HTML the value of a textarea was the text between the start tag ``<textarea>`` and the end tag ``</textarea>``.

    <textarea>
      Content of the textarea.
    </textarea>

&#10146; In React the value of a textarea is placed in a value attribute. We'll use the ``useState`` Hook to manage the value of the textarea:

#### Example

    A simple textarea with some content:

      import { useState } from 'react';
      import ReactDOM from 'react-dom/client';

      function MyForm() {
        const [description, setDescription] = useState("");

        const handleSubmit = (evt) => {
          evt.preventDefault();
          alert(`Submitting Name ${description}`)
        }

        const handleChange = (evt) => {
          const value = evt.target.value;
          setDescription(value);
        }

        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your description:
              <textarea
                value={description}
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<MyForm />);

### Select

&#10146; A drop down list, or a select box, in React is also a bit different from HTML.

&#10146; in HTML, the selected value in the drop down list was defined with the ``selected`` attribute:

#### HTML:

    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>

&#10146; In React, the selected value in the drop down list is defined with a ``value`` attribute on the ``select`` tag.

&#10146; Then, you can listen to the ``onChange`` event and update the value accordingly.

#### React:
    A simple select box, where the selected value "Volvo" is initialized in the constructor:
      function MyForm() {
        const [myCar, setMyCar] = useState("Volvo");

        const handleChange = (event) => {
          setMyCar(event.target.value)
        }

        return (
          <form>
            <select value={myCar} onChange={handleChange}>
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>
        )
      }

&#10146; By making these slight changes to ``<textarea>`` and ``<select>``, React is able to handle all input elements in the same way.

## Formik

&#10147; Formik is a small library that helps you with the 3 most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

&#10147; Formik supports synchronous and asynchronous form-level and field-level validation.

&#10147; Formik is designed to manage forms with complex validation with ease.

&#10147; Formik supports field-level validation via the ``validate`` prop of ``<Field>`` or ``<FastField>``.


#### Example

    import React from 'react';
    import { Formik, Form, Field, ErrorMessage } from 'formik';
    import * as Yup from 'yup';

    const SignupForm = () => {
      return (
        <div>
          <h1>Signup</h1>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" />

              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      );
    };

    export default SignupForm;

## Yup

&#10147; Yup is a JavaScript schema builder for value parsing and validation.

&#10147; Define a schema, transform a value to match, validate the shape of an existing value, or both.

&#10147; Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.

&#10147; Yup is also a perfect fit for client-side form validation.


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders40/formik-app/src/assets/media.gif)
