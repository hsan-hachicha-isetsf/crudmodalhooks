import React from 'react'
import Table from 'react-bootstrap/Table';
const ArticleList = ({products}) => {
  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {products.map((pr,index)=>
        <tr>
          <td><img src={pr.imageart} width={80} height={80}/></td>
          <td>{pr.reference}</td>
          <td>{pr.designation}</td>
          <td>{pr.prix}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

export default ArticleList
