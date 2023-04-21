import React, { useRef, useState } from 'react'

function NoteContents({textareaRef, text}) {
    const [isFocus, setIsFocus] = useState(false);
    const noteRef = useRef();
    const clickNote = () => {
        noteRef.current.parentNode.className = 'h-[160px] w-[160px] bg-[#ED9D38] rounded-[15px] m-[8px] first:ml-[0px] transition duration-300 ease-out scale-110'
        noteRef.current.className = 'm-[15px] h-[130px] w-[130px] resize-none outline-none bg-[#ED9D38]'
        textareaRef.current.focus();
        setIsFocus(true);
    }

    return (
        <div className='h-[160px] w-[160px] bg-[#F8E989] rounded-[15px] m-[8px] first:ml-[0px]'>
            <textarea 
                className='m-[15px] h-[130px] w-[130px] resize-none outline-none bg-[#F8E989]'
                value={text}
                onClick={clickNote}
                ref={noteRef}
                isFocus={isFocus}
            />
        </div>
    )
}

export default NoteContents