import React,{ useState} from 'react';
{/* hooks basically let you use class features without using it */}


export default function Textforms(props) {
  const handleUC =()=>{
    console.log("uppercase clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)

  }
  const handleLC =()=>{
    console.log("uppercase clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)

  }
  const handleonchange =(event)=>{
    console.log("uonchange clicked")
    // this will target the value you can now change/add text in textarea
    setText(event.target.value);

  }


  const [text, setText]= useState('enter the text');
  // setText=('New text'); // way to change the text

  return (
    <div>
        

        
<div className="mb-3">
  <h1>{props.heading}</h1>
  {/* here onchange use for adding text in the text area  */}
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUC}>UpperCase</button>
<button className="btn btn-danger" onClick={handleLC}>LowerCase</button>

    </div>
  )
}
