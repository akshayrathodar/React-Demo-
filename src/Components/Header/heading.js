import React from 'react';


function Heading(props) {
    const HeadingText = props.text;
    const style = {
        margin:'100px'
      };
    return(
        <>
            <div className="container">
                <h1 style={style}>{HeadingText}</h1>
            </div>
        </>
    );
}
export default Heading;