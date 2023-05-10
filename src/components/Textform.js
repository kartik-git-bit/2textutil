import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter text")

    const handleuppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("success", "text converted to uppercase")
    }

    const handlelowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("success", "text converted to lowercase")
    }

    const handlechange = (e) => {
        setText(e.target.value)
    }

    const handlecleartext = () => {
        setText("");
        props.showalert("success", "cleared text")
    }

    const handlecopy = () => {
        let tarea = document.getElementById("textarea");
        tarea.select();
        navigator.clipboard.writeText(tarea.value);
        props.showalert("success", "text copied")
    }
    return (
        <>
            <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>{props.title}</h2>
                <div className="container my-2 ">
                    <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} onChange={handlechange} value={text} id="textarea" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleuppercase}>uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handlelowercase}>lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handlecleartext}>clear</button>
                <button className='btn btn-primary mx-2' onClick={handlecopy}>copy</button>

                <h3 className='my-3'>word count</h3>
                <p>total words : {text.split(" ").length} </p>
                <p>total character :{text.length}</p>
                <h3 className='my-1'>Reading speeds</h3>
                <p>{text.split(" ").length * 0.008}</p>
                <h3 className='my-1'>Preview</h3>
                <div id="preview">{text}</div>
            </div>
        </>
    )
}
