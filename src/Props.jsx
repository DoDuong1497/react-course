import React from 'react'

/* Props
  - Props should read-only, meaning that they cannot be modified by the component itself
  - Passed from parent component to child component.
  - luu y khi pass function component react in jsx:
    - name should start with a capital letter
*/

// rest operator: get all the remains properties of the object
// spread operator: pass all the properties of the object to another object
// default value: if the value is not passed, it will be the default value

function Welcome({ brand, color, year }) {
  console.log("welcome: ",  brand, color, year)
  return (
    <div>Welcome spread operator</div>
  )
}

function Props({ name, age = 10, address, children, component: Component, compoennt2, ...restProps }) {
  const cars = {
    brand: 'BMW',
    color: 'red',
    year: 2020
  }

  console.log('props: ', {
    name,
    age,
    city: address.city,
    restProps,
    children
  })

  return (
    <div>
      Hello {name}
      <br />
      {children}

      {/* <Welcome brand={cars.brand} color={cars.color} year={cars.year} /> */}
      <Welcome {...cars} /> {/* spread operator */}

      {/* pass as function component */}
      <h3>pass as function component</h3>
      <Component />

      <h3>pass execute react function component</h3>
      {compoennt2}
    </div>
  )
}

export default Props