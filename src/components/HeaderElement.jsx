import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Cart from "./Cart"

const HeaderElement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = (value) => {
    setIsModalOpen(value);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  return (
    <header>
      <nav>
        <h1 className="logo">ARC Shop</h1>
      </nav>
      <button onClick={() => handleCloseModal(true)}>Add to Cart</button>
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default HeaderElement;
