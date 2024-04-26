import React, { useRef } from 'react'

/*
component re-render
- state change
- props change
- parent component render
*/

/* Uncontrolled component
- Uncontrolled inputs are like traditional HTML form inputs:
- Don’t cause re-render component.
- The input value is not being managed by React.
- We are using DOM manipulation to access and manipulate the value of the input element.
- They remember what you typed. You can then get their value using a ref.

Controlled component
- The value is handled by the react state.
*/

function ChildComponent() {
  console.log('child component render')
  return (
    <div>this is child component</div>
  )
}

function Form() {
  const [time, setTime] = React.useState({
    author: 'tony'
  }); // time = 1;
  const firstNameRef = useRef(null);
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [form, setForm] = React.useState({
    age: '',
    color: ''
  })

  function onChange(e) {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }


  console.log('form render');

  return (
    <div>
      <h2>Form</h2>
      <ChildComponent time={time}/>
      <br />
      First Name: <input ref={firstNameRef} defaultValue="nguyen" type="text" id="first_name" /> <br /> <br />
      Last Name: 
      <input 
        type="text" 
        onChange={(e) => {
          setLastName(e.target.value)
        }} 
      />
       <br /><br />
       Gender:
      <select value={gender} onChange={(e) => {
        setGender(e.target.value)
      }}>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <br /><br />
      <h3>Multiple Form</h3>
      Age:
      <input 
        type="number" 
        name="age"
        onChange={onChange} 
      />
      <br /><br />
      Color:
      <input 
        type="text" 
        name="color"
        onChange={onChange} 
      />
      <br /><br />
      <button 
        onClick={() => {
          setTime({
            author: 'tony'
          });
          // get value first name
          console.log('first name: ', firstNameRef.current.value)
          console.log('last name: ', lastName)
          console.log('gender: ', gender)
          console.log('multiple form: ', form)
        }}
      >
        Submit
      </button>

    </div>
  )
}

export default Form