import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addUpdateUserMeta, uploadImage } from "../services/apiService";
import { updateUserImages, updateUserImageVisibility, updateUserProfileImage } from "../store/slice/userDetailSlice";

const ImageUpload = ({ userId, imageType, disabled }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const visibility = useSelector((state) => state.userDetails.userImageVisibility);
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userDetails.token);
  const userMeta = useSelector((state) => state.userDetails.userMeta);
  

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length + selectedFiles.length > 3) {
      alert("You can upload a maximum of 3 images.");
      return;
    }

    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleSliderRelease = () =>{
    addUpdateUserMeta(visibility, userId, userMeta.id, userToken);
  };

  

  const handleUpload = async () => {
    setUploading(true);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append("imageData", selectedFiles[i]);
        formData.append("imageType", imageType);
        formData.append("isVisible", visibility > 99);
        formData.append("isDelete", false);
        formData.append("userId", userId);

        const response = await uploadImage(formData, userToken);

        if (imageType === "PROFILE") {
          dispatch(updateUserProfileImage({ userProfileImage: { isLoaded: true, image: response.imageData } }));
        } else {
          dispatch(
            updateUserImages({
              actionType: "ADD",
              image: { id: response.id, image: `data:image/png;base64,${response.imageData}` },
            })
          );
        }
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
    dispatch(updateUserImageVisibility({ userImageVisibility: e.target.value }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxFiles: 3 - selectedFiles.length,
    disabled, // Pass disabled state to the dropzone
  });

  return (
    <div style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : "auto" }}>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #000",
          padding: "20px",
          textAlign: "center",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>Upload Images (Click or Drag and drop) (Max 3)</p>
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
            {!disabled && (
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
            )}
          </div>
        ))}
      </div>

      {/* Keep the slider always visible and interactive */}
      <div style={{ opacity: 1, pointerEvents: "auto", marginTop: "20px" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={visibility}
          onChange={handleSliderChange}
          onMouseUp={handleSliderRelease} // Event when mouse is released
          onTouchEnd={handleSliderRelease} 
          style={{ width: "100%" }}
        />
        <p>Visibility: {visibility}%</p>
      </div>

      <button
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0 || disabled}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: disabled ? "#d3d3d3" : "#007bff",
          color: "#fff",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {uploading ? "ඇතුලත් කරමින්..." : "චායා රූප ඇතුලත් කරන්න"}
      </button>
    </div>
  );
};

export default ImageUpload;
