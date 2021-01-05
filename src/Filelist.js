import axios from 'axios'
import React, { Component } from 'react'
import DragAndDrop from './draganddrop'
import {Progress} from 'reactstrap'
class FileList extends Component {
state = {
    files: [],
    loaded: 0
  }
 handleDrop = (files) => {
    let fileList = this.state.files
    const data = new FormData()

    for (var i = 0; i < files.length; i++) {
      data.append('file', this.state.files[i])
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
    axios.post("http://localhost:3001/upload", data,{
        onUploadProgress: ProgressEvent => {
            this.setState({
                loaded: (ProgressEvent.loaded/ProgressEvent.total*100)
            })
        }
    })
    .then(res=>{
        console.log(res.statusText)
    })
  }

render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file) =>
            <div>{file}</div>
          )}
        </div>
        <div>
            <Progress max ="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>
        </div>
      </DragAndDrop>
    )
  }
}
export default FileList