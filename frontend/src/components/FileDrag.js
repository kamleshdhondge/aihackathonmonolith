import { useState } from 'react';

function FileDrag() {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    const files = [...event.dataTransfer.files];
    console.log('Files dropped:', files);
    // Do something with the dropped files
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ padding: '20px', border: `2px dashed ${dragging ? 'red' : 'grey'}` }}
    >
      <p>Drag and drop files here</p>
    </div>
  );
}

export default FileDrag;