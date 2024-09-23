import { jsx, Box, Container, Image, Button } from "theme-ui";
import { RiArrowRightSLine } from "react-icons/ri";
import React, { useState } from "react";
import Modal from "react-modal";
import SectionHeading from "../components/section-heading"; // Assuming siteImages is correctly imported from your resource folder
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Gallery = ({ data, title, subTitle, exploreBtText, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const userImageVisibility = useSelector((state) => state.userDetails.userImageVisibility);
  const openModal = (image) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'ඔබට විශ්වාසද ?',
      text: "ඔබේ චායා රූපයක් පද්දතියෙන් ඉවත් කෙරෙනු ඇත?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ඔවු, ඉවත් කරන්න!',
      cancelButtonText: 'එපා, අවශ්‍ය නැත!',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire(
          'ඉවත් කරා!',
          'ඔබේ චායාරූපය පද්දතියෙන් ඉවත් කරන ලදී.',
          'success'
        );
      }
    });
  };

  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        {title && <h2>{title}</h2>}

        <Box sx={styles.galleryWrapper}>
          {data.map((item) => (
            <Box key={item.id} sx={styles.imageWrapper} onClick={() => openModal(item.image)}>
              <Image style={{filter: `blur(${(100 - userImageVisibility) / 10}px)`}} loading="lazy" src={item.image} alt={item.title} />
              <Box
                sx={styles.deleteButton}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents modal from opening when deleting
                  handleDelete(item.id);
                }}
              >
                <FaTrash />
              </Box>
            </Box>
          ))}
        </Box>
        {exploreBtText && (
          <Button variant="muted" sx={styles.button}>
            {exploreBtText}
            <RiArrowRightSLine size="20px" />
          </Button>
        )}

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
          ariaHideApp={false}
        >
          <button onClick={closeModal} style={styles.closeButton}>Close</button>
          {activeImage && <Image src={activeImage} alt="Enlarged" sx={styles.modalImage} />}
        </Modal>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },
  section: {
    
    pb: [30, 30, 30, 45, 40, 60],
  },
  galleryWrapper: {
    mx: "-15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: [
      "calc(100% - 15px)", // Full width for mobile
      "calc(50% - 15px)", // Half width for small screens
      "calc(33.3333% - 15px)", // One-third for medium screens
      "calc(30% - 15px)", // One-fourth for large screens (adjusted from 20%)
    ],
    mb: ["30px", "30px", "30px", "30px", "30px", "0"],
    cursor: "pointer",
    "& img": {
      width: "100%",
      borderRadius: "8px",
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1)",
      transition: "transform 0.4s ease-in-out 0s",
    },
    "&:hover img": {
      transform: "scale(1.05)",
    },
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: "100%",
    mt: ["30px", "30px", "30px", "40px"],
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
  modalImage: {
    width: "90%",
    height: "auto",
    maxWidth: "1000px",
    borderRadius: "8px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
