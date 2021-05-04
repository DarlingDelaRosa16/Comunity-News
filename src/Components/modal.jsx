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
                <label htmlFor="user">Usuario</label>
                <input type="text" name="user" />
              </div>

              <div>
                <label htmlFor="user">Constraseña</label>
                <input type="text" name="user" />
              </div>

          </form>
          <br />
          <Button color="success" onClick={toggleNested}>Confirmar</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Modal de informacion y creaciones de noticias </ModalHeader>
            <ModalBody> - Su Usuario ha sido confirmado o denegado
                <form>
                    <div>
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="Description">Descripcion</label>
                        <input type="text" name="title" />
                    </div>
                    
                </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
    );
}
 
export default ModalInfo;