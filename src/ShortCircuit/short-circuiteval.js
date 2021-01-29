import React from 'react'

function Shortcircuit() {
    /*let i = 5;
    const [text, setText] = React.useState('')
    const firstValue = text || 'hello world';
    const secondValue = text && 'hello world';*/
    const [show, setShow] = React.useState(false)
    return (
        <>
            <button className="btn-cus" onClick={()=>setShow(!show)}>
                Show / hide
            </button>
            {show && <Item/>}
        </>
    )
};
const Item = () => {
    const [size, setSize] = React.useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener('resize',checkSize)
        return () => {
            window.removeEventListener('resize',checkSize);
        }
    }, [])
    return <div>
        <h1>Window</h1>
        <h1>Size : {size}</h1>
    </div>
}

export default Shortcircuit
