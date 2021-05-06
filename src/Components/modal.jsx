import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/modal.css'

const ModalInfo = () => {

  const buttonLabel = 'Iniciar sesion'
  const className = 'Crear noticia'

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

    
  return (
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Perfil de Usuario</ModalHeader>
      <ModalBody>
        <form>
            <div>
              <label htmlFor="user"><b>Usuario:</b></label>
              <input type="text" name="user" />
            </div>

            <div>
              <label htmlFor="user"><b>Constraseña: </b></label>
              <input type="text" name="user" />
            </div>

        </form>
        <br />
        <Button color="success" onClick={toggleNested}>Confirmar</Button>
        <Button color="secondary" onClick={toggle}>Cerrar</Button>
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
          <ModalHeader>Creacion de noticias </ModalHeader>
          <ModalBody>
            <div className="p-2">

              <form>
                  <div>
                      <label htmlFor="title"><b>Titulo: </b></label>
                      <input type="text" name="title" />
                  </div>
                  <div>
                      <label htmlFor="nombre"><b>Nombre: </b></label>
                      <input type="text" name="nombre" />
                  </div>
                  <div>
                      <label htmlFor="description"><b>Descripcion: </b></label>
                      <textarea name="description" cols="55" rows="8"></textarea>
                  </div>
                  <div>
                      <label htmlFor="img"><b>Imagen: </b></label>
                      <input type="file" name="img"/>
                  </div>
                  <Button>Confirmar</Button>
              </form>

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleNested}>Cancelar</Button>{' '}
            <Button color="secondary" onClick={toggleAll}>Cerrar Todo</Button>
          </ModalFooter>
        </Modal>
      </ModalBody>
    </Modal>
  </div>
  );
}
 
export default ModalInfo;