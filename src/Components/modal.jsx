import React, { useState, useContext} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/modal.css'
import CategoryContext from '../Contexs/categoryContext'
import Login from './login'
import { types } from '../Contexs/storeReducer';
import CreateDependOfUser from './createDependOfUser';


const ModalInfo = () => {

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [state, dispatch] = useContext(CategoryContext) 

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const confirmTheUser = ()=>{
    dispatch({
      type: types.comfirmButtonModalLogin,
      confirmatedLogIn: {isLogIn: true}
    })
  }

  return (
    <div>
      <Button onClick={toggle}>Crear Noticia</Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Perfil de Usuario</ModalHeader>
        <ModalBody>

          <Login validationSuccess={{setNestedModal,nestedModal}}/>

          <Button onClick={confirmTheUser}>Confirmar</Button>
          <Button onClick={toggle}>Cerrar</Button>

          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            
            <ModalHeader>Creacion de noticias </ModalHeader>

            <ModalBody>
              <CreateDependOfUser/>
            </ModalBody>

            <ModalFooter>
              <Button onClick={toggleNested}>Cancelar</Button>{' '}
              <Button onClick={toggleAll}>Cerrar Todo</Button>
            </ModalFooter>

          </Modal>

        </ModalBody>

      </Modal>
    </div>
  );
}
 
export default ModalInfo;