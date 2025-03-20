import React, { useState } from 'react'
import propsType from 'prop-types'


export default function TextInput(props) {

    function convartUpperCase() {
        // let newText=text.toUpperCase()// we can use this 
        // updatestr(text.toUpperCase())
        updateText(text.toUpperCase());
    }
    function handlOnChange(event) {
        updatestr(event.target.value)
        updateText(event.target.value)
    }
    function convartLowerCase() {
        // updatestr(text.toLowerCase())
        updateText(text.toLowerCase());
    }
    function convartChange() {

        let currWord = input1;
        if (currWord.split(" ").length > 1) {
            alert("Enter single word");
            return;
        }
        let newWord = input2;
        let updatedStr = str.replace(new RegExp(currWord, 'g'), newWord);
        if (updatedStr !== text) {
            updatestr(text);
        } // document.activeElement('keypress',(e)=>{
            //     if(e.key()=='enter'){
            //         store();
            //     }
            // });
        updateText(updatedStr);

    }
    function displayPrevious() {
        updateText(str);
    }

    function newChangeWord(event) {
        updateInput2(event.target.value)
    }
    function currChangeWord(event) {
        updateInput1(event.target.value)
    }
    function ClearText() {
        updateText("")
    }
    function copyText() {
        navigator.clipboard.writeText(text)
            .then(() => {
                updateStyle({
                    display: 'block',
                    width: '200px',
                    position: 'absolute',
                    top: '-50px',
                    left: '0',
                    backgroundColor: 'white',
                    padding: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    zIndex: '1000',
                    borderRadius: '4px',
                });


                setTimeout(() => { updateStyle({ display: "none" }) }, 1000)
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy text:', err);
            });
    }

    const [text, updateText] = useState("Enter Text Here")
    const [input1, updateInput1] = useState("Current word");
    const [input2, updateInput2] = useState("New word");
    const [str, updatestr] = useState(text);
    const [myStyle, updateStyle] = useState(
        {
            display: 'none',

        }
    );
    // text="new text"//wrong way
    // updateText("new Text");

    return (
        <>






            {/* <Aleart style={myStyle}/> */}
            <div className="container my-3">
                <div className="mb-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control" id="MyBox" rows="10" value={text} onChange={handlOnChange} style={{background:"#9cb2c7",border:"1px solid black"}}></textarea>
                </div>
                {/* for popup and copy */}
                <div style={{ position: 'relative' }}>
                    <div className="alert alert-info" style={myStyle} role="alert">
                        Successfully copied
                    </div>
                    <button type="button" className="btn btn-info my-2" onClick={copyText}>Copy Text</button>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100 my-1" onClick={convartUpperCase}>Convert to UpperCase</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success w-100 my-1" onClick={convartLowerCase}>Convert to LowerCase</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 my-1" onClick={displayPrevious}>Previous Text</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger w-100 my-1" onClick={ClearText}>Clear Text</button>
                    </div>
                </div>


            </div>

            <div className="container">
                <h3>Replace a word with new word</h3>
                <div className="row">
                    <div className="col-md-2">
                        <input className="form-control" type="text" value={input1} onChange={currChangeWord} />
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" type="text" value={input2} onChange={newChangeWord} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success w-100 my-1" onClick={convartChange}>Save to Change</button>
                    </div>

                </div>
            </div>

            <div className="container">
                <h3>Your text summary</h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
            </div>

        </>
    );
}

// TextInput.defaultProps={
//  title:"Enter The Text"
// }
// TextInput.propsType={
//     title:propsType.string.isRequired
// }