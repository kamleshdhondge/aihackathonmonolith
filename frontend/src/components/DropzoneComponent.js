import { sizing } from "@mui/system";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Grid, Typography,

} from "@mui/material";
const baseStyle = {
  "box-sizing": "border-box",
  width: "104%",
  height: "200px",
  marginTop: '20px',
  background: "#F8F8F8",
  border: "1px dashed #1A374D",
  "border-radius": 4,
  flex: "none",
  order: 1,
  "flex-grow": 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{marginTop: "13%", display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <h4>Drag your contract here</h4>
          </Grid>
          <Grid item style={{marginTop: "2%", display: 'flex', justifyContent: 'center'}}>
            <img src="./arrow-up.png" style={{width: '35px', height: '35px'}}/>
          </Grid>
        </Grid>
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
}

export default DropzoneComponent;
