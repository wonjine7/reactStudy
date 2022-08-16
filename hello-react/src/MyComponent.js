import React from 'react'

const clickMe = () => {
    alert("축하드립니다.");
}


const MyComponent = props => {
    
  return (
    
    <div>
        나의 이름은 {props.name}입니다. <br/>
        
        <button onClick={clickMe}>클릭</button>
    </div>
  )
  
}

MyComponent.defaultProps = {
    name : '최원진'
  }

export default MyComponent