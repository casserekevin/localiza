import React, { useState, useRef, useEffect } from 'react'

import './style.css'

export default function InputFile(props) {
    const {id, name, textLabel, textButton, onChange} = props

    const inputFileRef = useRef()

    useEffect(() => {
        let inputFile = inputFileRef.current

        let label = inputFile.nextElementSibling
        let textLabel = label.innerHTML

        inputFile.addEventListener('change', (e) => {
            debugger
            let fileName = ''

            let files = e.target.files
            if(files && files.length > 1){
                fileName = (inputFile.getAttribute( 'data-multiple-caption' ) || '').replace('{count}', files.length)
            }
            else{
                fileName = e.target.value.split( '\\' ).pop()
            }

            if( fileName ) {
			    label.innerHTML = fileName;
            }
		    else{
			    label.innerHTML = textLabel;
            }


            onChange(files[0])
        })
    },[])

    return (
        <div>
            <label className='input-lbl'>{textLabel}</label>
            <div>
                <input type='file' id={id} name={name} className='default-input-file' data-multiple-caption="{count} arquivos selecionados" accept="image/*" ref={inputFileRef}/>
                <label htmlFor={id} >{textButton}</label>
            </div>
            
        </div>
        
    )
}

