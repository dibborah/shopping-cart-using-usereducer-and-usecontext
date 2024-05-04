import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Cart from "./Cart";
import styles from "./Header.module.css";
import Container from "../UI/Container";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../contexts/CartProvider";

const HeaderElement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  const totalQuantity = cart.reduce((current, accumulator) => {
    return current + accumulator.quantity;
  }, 0);

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
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
        </nav>
      </Container>
      <button
        className={styles.showCartBtn}
        onClick={() => handleCloseModal(true)}
      >
        <span className={styles.cartIconAndNumber}>
          <BsCartFill />
          {
            // {!!totalQuantity && (
            //   <span className={styles.number}>{totalQuantity}</span>
            // )}
          }
          {totalQuantity > 0 && (
            <span className={styles.number}>{totalQuantity}</span>
          )}
        </span>
        <span>Cart</span>
      </button>
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default HeaderElement;
