import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './Input.module.css'
import FileList from '../../Filelist'
import axios from 'axios'
import { config } from 'process'

type Props = {
  label?: string
  id?: string
  filename?: string
}

export const Dropbox = ({ label, id, filename }: Props) => {
  const onDrop = useCallback((acceptedFiles) => {
    const data = new FormData()
    for (var i = 0; i < acceptedFiles.length; i++){
      data.append('file', acceptedFiles[i], filename)
    }
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    axios.post("http://localhost:3001/upload", data, config)
    const filesname = acceptedFiles.files[0].name
  }, [])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop
        }
  )

  const styleName = `${styles.dropboxContainer} font-md weight-li`


  return (
    <div>
      <div>{label}</div>
      <div className={styleName} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className={`${styles.dropboxBody}`}>
              <div>Drag & Drop</div>
          </div>
          )}
        <br></br>
        <div>Files: {filename}</div>
      </div>
    </div>
  )
}
