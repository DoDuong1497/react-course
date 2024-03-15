import React from 'react'

/* Props
  - Props should read-only, meaning that they cannot be modified by the component itself
  - Passed from parent component to child component.
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

function Props({ name, age = 10, address, ...restProps }) {
  const cars = {
    brand: 'BMW',
    color: 'red',
    year: 2020
  }

  console.log('props: ', {
    name,
    age,
    city: address.city,
    restProps
  })

  return (
    <div>
      Hello {name}

      {/* <Welcome brand={cars.brand} color={cars.color} year={cars.year} /> */}
      <Welcome {...cars} /> {/* spread operator */}
    </div>
  )
}

export default Props