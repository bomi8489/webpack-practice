import React, { useEffect, useRef, useState } from 'react'
import NoteContents from './NoteContents'

function Note() {
    const [text, setText] = useState("");
    const [noteList, setNoteList] = useState([]);
    const textareaRef = useRef();
    const textareaBoxRef = useRef();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const clickAdd = () => {
        setNoteList(prev => [...prev, text]);
        textareaRef.current.disabled = false;
        textareaRef.current.value = text;
        textareaRef.current.className = 'm-[20px] h-[68px] w-[840px] resize-none outline-none bg-white';
        textareaRef.current.parentNode.className = 'h-[108px] w-[880px] bg-white mb-7 rounded-[15px]'
        textareaRef.current.focus();
    }

    const foucusOutTextarea = () => {
        textareaRef.current.disabled = true;
        textareaRef.current.className = 'm-[20px] h-[68px] w-[840px] resize-none outline-none bg-[#1D1E1D]';
        textareaRef.current.parentNode.className = 'h-[108px] w-[880px] bg-[#1D1E1D] mb-7 rounded-[15px]'
        textareaRef.current.value = "";
    }

    useEffect(() => {
        setText("새로운 노트");
    }, noteList)

    return (
        <div className='w-full bg-green-200 mt-24 absolute flex flex-col items-center'>
            <div className='h-[64px] w-[880px] bg-black mb-7'></div>
            <div className='h-[108px] w-[880px] bg-[#1D1E1D] mb-7 rounded-[15px]'>
                <textarea 
                    className='m-[20px] h-[68px] w-[840px] resize-none outline-none bg-[#1D1E1D]'
                    onChange={onChange}
                    ref={textareaRef}
                    disabled={true}
                />
            </div>
            <div className='bg-black mb-7 w-[880px] flex flex-wrap'>
                {noteList.length >= 1 && 
                noteList.map(noteText => (
                    <NoteContents noteText={noteText}/>
                ))
                }
                <div onClick={clickAdd} className='h-[160px] w-[160px] bg-[#C9CAC9] rounded-[15px] m-[8px] hover:cursor-pointer'></div>
            </div>
        </div>
    )
}

export default Note
