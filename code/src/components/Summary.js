import React from 'react' 

const Summary = (item) => {

  return (
    <div>Thank you for taking time to complete this survey.
      <p className="bold">Here's what you said:</p>
      <p>You purchase Thing: <i>{item.frequency}</i></p>
      <p>It is most import to you that Thing is: <i>{item.factor}</i></p>
      <p>Your age group is: <i>{item.age}</i></p>
    </div>
  )
}

export default Summary