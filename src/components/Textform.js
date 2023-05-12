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
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleuppercase}>uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handlelowercase}>lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handlecleartext}>clear</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handlecopy}>copy</button>

                <h4 className='my-3'>word count</h4>
                <p>total words : {text.split(" ").filter((element) => { return element.length !== 0 }).length} </p>
                <p>total character :{text.length}</p>
                <h4 className='my-1'>Reading speeds</h4>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008}</p>
                <h4 className='my-1'>Preview</h4>
                <div id="preview">{text.length > 0 ? text : "nothing to priview"}</div>
            </div>
        </>
    )
}
