import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useSelector } from "react-redux";
import { backEndBaseUrl } from "../store/static-store";

const ImageUpload = ({ userId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [visibility, setVisibility] = useState(100); // Single slider visibility for all images
  //const userToken = useSelector((state)=>state.userDetail.token)
  const userToken = useSelector((state)=> state.userDetail.token)
  const userDetails = useSelector((state)=> state.userDetail.userDetails)
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length + selectedFiles.length > 3) {
      alert("චායාරූප ඇතුල් කරන්න. ඇතුල් කල හැකි උපරිමය 3ක් පමණි.");
      return;
    }

    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleUpload = async () => {
    console.log("user data ====>"+userDetails)
    setUploading(true);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append("imageData", selectedFiles[i]);
        formData.append("isVisible", visibility > 50); // Adjust visibility threshold
        formData.append("isDelete", false);
        formData.append("userId", 1); // assuming the userId is passed as a prop

        console.log("token===" + userToken);
        await axios.post(`${backEndBaseUrl}/api/user-images`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + userToken
            },
        });
    }

      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images");
    } finally {
      setUploading(false);
      setSelectedFiles([]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSliderChange = (e) => {
    setVisibility(e.target.value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxFiles: 3 - selectedFiles.length,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #000",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>චායාරූප ඇතුල් කරන්න (Click or Drag and drop) (උපරිම 3)</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {selectedFiles.map((file, index) => (
          <div key={index} style={{ margin: "10px", position: "relative" }}>
            <img
              src={file.preview}
              alt="Preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
                filter: `blur(${(100 - visibility) / 10}px)`,
              }}
            />
            <button
              onClick={() => removeFile(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <>
        <input
          type="range"
          min="0"
          max="100"
          value={visibility}
          onChange={handleSliderChange}
          style={{ marginTop: "20px", width: "100%" }}
        />
        <p>දර්ශනය නොවන ප්‍රමාණය (Blur effect): {100-visibility}%</p>
      </>

      <button
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {uploading ? "Uploading..." : "Upload Images"}
      </button>
    </div>
  );
};

export default ImageUpload;
