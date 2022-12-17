import React from 'react'
import './upload.css'
import axios from 'axios';
import { useState } from 'react';



<helmet>

  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" ></link>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</helmet>
const Upload = () => {
  // function readURL(input) {
  //   if (input.files && input.files[0]) {

  //     var reader = new FileReader();

  //     reader.onload = function (e) {
  //       $('.image-upload-wrap').hide();

  //       $('.file-upload-image').attr('src', e.target.result);
  //       $('.file-upload-content').show();

  //       $('.image-title').html(input.files[0].name);
  //     };

  //     reader.readAsDataURL(input.files[0]);

  //   } else {
  //     removeUpload();
  //   }
  // }

  // function removeUpload() {
  //   $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  //   $('.file-upload-content').hide();
  //   $('.image-upload-wrap').show();
  // }
  // $('.image-upload-wrap').bind('dragover', function () {
  //   $('.image-upload-wrap').addClass('image-dropping');
  // });
  // $('.image-upload-wrap').bind('dragleave', function () {
  //   $('.image-upload-wrap').removeClass('image-dropping');
  // });



  //  const state = {
  //   file: null
  // }
  // const handlefile = (e) =>
  // {
  //   let file = e.target.file[0];
  //   this.setstate({file: file});
  // } 

  // const handleupload = (e) =>
  // {
  //   //  console.log(this.state, "The STATE ------ $$$$$");

  //   let file = this.state.file;
  //   let formdata = new formdata();

  //   formdata.append('image',file);
  //   // formdata.append('name','ABC');


  //   axios({
  //     url: "http://localhost:3000/Upload",
  //     method: "POST",
  //     headers:{
  //       "Content-Type":"image/png"
  //     }

  //   }) .then(()=>console.log('Certificate Uploaded successfully'))
  //   .catch(err=>console.log(err))
  // }
  const [ file, setfile ] = useState(null)

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      },
    };
    const url = 'http://localhost:3001/user/upload'
    axios.post(url, formData, config).then((response) => {
      alert('image uploaded successfully!!')
    }).catch((err) => {
      console.log('err',err);
    })
  }
  const onInputChange = (e) => {
    setfile(e.target.files[ 0 ])
  }
  return (
    <div className="text-center">
      <form className="border" style={{ width: "max-content", margin: "auto", height: "50vh" }} onSubmit={onFormSubmit}>
        <h1 className="text-center" style={{ padding: "20px" }}><marquee>Upload Your Certificate</marquee></h1>
        <div class="Neon Neon-theme-dragdropbox">
          <input style={{
            "z-index": "999",
            opacity: "0",
            width: "320px",
            height: "200px",
            position: "absolute",
            right: "0px",
            left: "0px",
            "margin-right": "auto",
            "margin-left": "auto",
          }}
            name="photo"
            id="filer_input2" multiple="multiple"
            type="file" onChange={onInputChange} />
          <div class="Neon-input-dragDrop"><div class="Neon-input-inner"><div class="Neon-input-icon"><i class="fa fa-file-image-o"></i></div><div class="Neon-input-text"><h3>Drag&amp;Drop files here</h3> <span style={{ display: "inline-block", margin: "15px 0" }}>or</span></div><a class="Neon-input-choose-btn blue">Browse Files</a></div></div>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Upload File</button>
      </form>
    </div>
  );
};
export default Upload;

//onclick = {(e) => handleupload(e)}

