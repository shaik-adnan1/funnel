import "./infoModal.css";
import { useState } from "react";

const UserDetailsModal = ({ isModalOpen }) => {
  return (
    <>
      <h1>{`hey there ${isModalOpen}?`}</h1>
    </>
  );
};

export default UserDetailsModal;
