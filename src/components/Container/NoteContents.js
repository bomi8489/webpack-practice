import React, { useEffect, useRef, useState } from 'react'

const NoteContents = ({noteType, textareaRef, textObj}) => {
    const [isfocus, setisfocus] = useState(false);
    const noteRef = useRef();
    const noteBoxRef = useRef();
    const clickNote = () => {
        textareaRef.current.focus();
        setisfocus(true);
    }
    
    const checkFocus = (e) => {
        if(noteRef.current !== e.target) {
            setisfocus(false);
        }
    }

    useEffect(() => {
        noteRef.current.parentNode.className = 'h-[160px] w-[160px] bg-[#ED9D38] rounded-[15px] m-[8px] first:ml-[0px] transition duration-300 ease-out scale-105';
        noteRef.current.className = 'm-[15px] h-[130px] w-[130px] resize-none outline-none bg-[#ED9D38]';
    }, [isfocus])

    useEffect(() => {
        if(noteType === true) {
            noteBoxRef.current.className = 'h-[90px] w-[100%] bg-[#F8E989] rounded-[10px] mt-[8px] mb-[8px]';
            noteBoxRef.current.childNodes[0].className = 'm-[10px] h-[70px] w-[90%] resize-none outline-none bg-[#F8E989]';
        } else {
            noteBoxRef.current.className = 'h-[160px] w-[160px] bg-[#F8E989] rounded-[15px] m-[8px] first:ml-[0px] [&:nth-child(5n+1)]:ml-[0px]';
            noteBoxRef.current.childNodes[0].className = 'm-[15px] h-[130px] w-[130px] resize-none outline-none bg-[#F8E989]';
        }
    }, [noteType])

    return (
        <div onClick={checkFocus} ref={noteBoxRef} className='h-[160px] w-[160px] bg-[#F8E989] rounded-[15px] m-[8px] first:ml-[0px] [&:nth-child(5n+1)]:ml-[0px] transition duration-500 ease-out'>
            <textarea 
                className='m-[15px] h-[130px] w-[130px] resize-none outline-none bg-[#F8E989]'
                defaultValue={textObj.data}
                onClick={clickNote}
                ref={noteRef}
                isfocus={`${isfocus}`}
                id={textObj.id}
            />
        </div>
    )
}

export default NoteContents