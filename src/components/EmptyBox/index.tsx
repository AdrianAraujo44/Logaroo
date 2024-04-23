import { Container } from "./styles"
import emptyImage from "../../assets/empty.png"
import { useState } from "react"
import Modal from "../Modal"

function EmptyBox() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Container>
        <img src={emptyImage} />
        <strong>NENHUM POST CADASTRADO</strong>
        <p onClick={openModal}>Clique aqui para cadastrar</p>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title={"ADICIONAR POST"}
      />
    </>

  )
}

export default EmptyBox
