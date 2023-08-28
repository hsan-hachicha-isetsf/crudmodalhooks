import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { editArticle } from '../../services/ArticleService';


const EditArticle = ({art,scategories,updateProduct}) => {
    

    const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [marque, setMarque] = useState("");
  const [qtestock, setQtestock] = useState(0);
  const [imageart, setImageart] = useState("");
  const [validated, setValidated] = useState(false);
const [scategorieID, setScategorieID] = useState("");
  //const [scategorieID, setScategorieID] = useState(art.scategorieID?._id);
 const [show, setShow] = useState(false);
useEffect(() => {
    setReference(art.reference)
    setDesignation(art.designation)
    setPrix(art.prix)
    setMarque(art.marque)
    setQtestock(art.qtestock)
    setImageart(art.imageart)
    setScategorieID(art.scategorieID?._id)
}, [])



const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleSubmit = (e) => {
    e.preventDefault();
  const prmod = {
    ...art,
    reference,
        designation,
        prix, 
        marque,
        qtestock, 
        imageart,
        scategorieID
  };
 
  editArticle(prmod)
.then(updateProduct(prmod))
.catch(error=>console.log(error))

handleClose()
}

  return (
    <div>
      <Button                 
        onClick={handleShow}
        variant="warning"
        size="md"
        style={{float: 'left'}}
        className="text-warning btn-link edit"

      >
      <i class="fa-solid fa-pen-to-square"></i>
      
      </Button>
      
                  
  <Modal show={show} onHide={handleClose}>
     <Form noValidate validated={validated}  onSubmit={handleSubmit}>
  <Modal.Header closeButton>
      <h2>Modification Product</h2>
  </Modal.Header>
  <Modal.Body>
  <div className="container w-100 d-flex justify-content-center">
  <div>
  
  <div className='form mt-3'>
  <Row className="mb-2">
  <Form.Group as={Col} md="6" >
  <Form.Label >Référence *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Référence"
  value={reference}
  onChange={(e)=>setReference(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Référence Article
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="6">
  <Form.Label>Désignation *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Désignation"
  value={designation}
  onChange={(e)=>setDesignation(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Désignation
  </Form.Control.Feedback>
  </Form.Group>
  </Row>
  <Row className="mb-2">
  <Form.Group className="col-md-6">
  <Form.Label>Marque *</Form.Label>
  <InputGroup hasValidation>
  <Form.Control
  type="text"
  required
  placeholder="Marque"
  value={marque}
  onChange={(e)=>setMarque(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Marque Incorrecte
  </Form.Control.Feedback>
  </InputGroup>
  </Form.Group>
  <Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<Form.Control
type="text"
placeholder="Image"
value={imageart}
onChange={(e)=>setImageart(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>S/Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}
>
<option></option>
  

{scategories.map((scat)=><option key={scat._id}
value={scat._id}>{scat.nomscategorie}</option>
)}
</Form.Control>
</Form.Group>
</Row>
</div>
</div>
</div>
</Modal.Body>
<Modal.Footer>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btn-warning" >Annuler</Button>
</Modal.Footer>
</Form>
</Modal>
    </div>

  )
}

export default EditArticle
