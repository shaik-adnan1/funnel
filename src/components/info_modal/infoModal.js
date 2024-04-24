import "./infoModal.css";
import { useState } from "react";

const UserDetailsModal = ({ isModalOpen }) => {
  return (
    <>
      <h1>{`hey there ${isModalOpen}?`}</h1>
    </>
  );
};
// test change in the file

export default UserDetailsModal;
