import React from 'react'

// components
import Button from '../components/Button';

function GenerateBoxTony() {
  // state
  const [number, setNumber] = React.useState(0);
  const [boxes, setBoxes] = React.useState([]);
  
  // actions
  function onChangeNumber(event) {
    const { value } = event.target;
    const number = Number(value);

    if(isNaN(number)) return; // check if it's a number

    if(number >= 0 && number < 128) {
      setNumber(number);
    }
  }
  
  function handleGenerateBox() {
    // const boxes = Array.from({ length: number }, (_, i) => i);
    const boxes = [];
    for(let i = 0; i < number; i++) {
      boxes.push({
        id: i,
        text: i,
        bgColor: 'antiquewhite'
      })
    }
    setBoxes(boxes)
  }

  function handleChangeBgColor(boxId) {
    const newBoxes = [...boxes];
    // find box index
    const boxIndex = newBoxes.findIndex(box => box.id === boxId);

    // mutate bg color of box
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    newBoxes[boxIndex].bgColor = `#${randomColor}`;
    setBoxes(newBoxes)
  }


  console.log('GenerateBoxTony', boxes);

  // view
  return (
    <div>
      <h2>Sample App - GenerateBox</h2>

      <div>
        Number of boxes: <input type="text" value={number} onChange={onChangeNumber} />
        <Button 
          text="Generate"
          onClick={handleGenerateBox}
        />
      </div>

      <div className='box_container'>
        {boxes.length > 0 ? (
          <>
            {boxes.map((box) => {
              return (
                <div 
                  key={box.id} 
                  className='boxes'
                  style={{ background: box.bgColor}}
                  onClick={() => {
                    handleChangeBgColor(box.id)
                  }}
                >
                  box #{box.text + 1}
                </div>
              )
            })}
          </>
        ) : (
          <div>No data </div>
        )}


        
       
      </div>

    </div>
  )
}

export default GenerateBoxTony