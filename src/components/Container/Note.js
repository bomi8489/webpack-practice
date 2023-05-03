import React, { useEffect, useRef, useState } from 'react'
import NoteContents from './NoteContents'
import {AiOutlineUnorderedList, AiOutlinePlus} from 'react-icons/ai'
import {IoPersonCircleOutline} from 'react-icons/io5'

function Note() {
    const [text, setText] = useState("새로운 노트");
    const [noteType, setNoteType] = useState(false);
    const [noteList, setNoteList] = useState([]);
    const textareaRef = useRef();
    const addBtnRef = useRef();

    const note = {
        id: Date.now(),
        data: text
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    const clickAdd = () => {
        setNoteList(prev => [note, ...prev]);
        setText("새로운 노트");
        textareaRef.current.disabled = false;
        textareaRef.current.value = text;
        textareaRef.current.className = 'm-[20px] h-[68px] w-[840px] resize-none outline-none bg-white';
        textareaRef.current.parentNode.className = 'h-[108px] w-[880px] bg-white mb-7 rounded-[15px]';
        textareaRef.current.focus();
    }

    const clickNoteType = () => {
        setNoteType(prev => !prev);
    }

    useEffect(() => {
        if(noteType === true) {
            addBtnRef.current.className = 'h-[90px] w-[100%] bg-[#C9CAC9] rounded-[10px] mt-[8px] mb-[8px] hover:cursor-pointer flex justify-center items-center'
        } else {
            addBtnRef.current.className = 'h-[160px] w-[160px] bg-[#C9CAC9] rounded-[15px] m-[8px] hover:cursor-pointer flex justify-center items-center';
        }
    }, [noteType])

    useEffect(() => {
        console.log(noteList);
        if(noteList.length % 5 == 0) {
            addBtnRef.current.className = 
            'h-[160px] w-[160px] bg-[#C9CAC9] rounded-[15px] m-[8px] ml-[0px] hover:cursor-pointer flex justify-center items-center'
        } else {
            addBtnRef.current.className = 'h-[160px] w-[160px] bg-[#C9CAC9] rounded-[15px] m-[8px] hover:cursor-pointer flex justify-center items-center'
        }
    }, [noteList])

    return (
        <div className='w-full bg-black mt-24 absolute flex flex-col items-center'>
            <div className='h-[64px] w-[880px] bg-black mb-7 flex'>
                <div className='h-[64px] w-[800px] text-white font-sans text-[35px] flex items-center pl-[3px]'>KEEP APPLICATION</div>
                <div className='flex items-center mr-[5px] ml-[5px]'>
                    <div onClick={clickNoteType} className='h-[30px] w-[30px]'>
                        <AiOutlineUnorderedList className='text-[#C8C8C8] h-[30px] w-[30px] hover:cursor-pointer'/>
                    </div>
                </div>
                <div className='flex items-center mr-[5px] ml-[5px]'>
                    <IoPersonCircleOutline className='text-white h-[30px] w-[30px]'/>
                </div>
            </div>
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
                noteList.map((textObj, idx) => (
                    <NoteContents noteType={noteType} key={idx} textareaRef={textareaRef} textObj={textObj}/>
                ))
                }
                <div ref={addBtnRef} onClick={clickAdd} className='h-[160px] w-[160px] bg-[#C9CAC9] rounded-[15px] m-[8px] hover:cursor-pointer flex justify-center items-center'>
                    <AiOutlinePlus className='h-[25px] w-[25px] font-bold text-white'/>
                </div>
            </div>
        </div>
    )
}

export default Note
