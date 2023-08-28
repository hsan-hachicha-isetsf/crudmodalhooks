import React,{ useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import EditArticle from './EditArticle';
const ArticleList = ({products,deleteProduct,scategories,updateProduct}) => {

  const delpr=(productid,ref)=>{
    deleteProduct(productid,ref)
  }
  const columns = useMemo(
    () => [
      {
        accessorKey: 'reference', //access nested data with dot notation
        header: 'Référence',
        size: 100,
      },
      {
        accessorKey: 'designation',
        header: 'Désignation',
        size: 150,
      },
      {
        accessorKey: 'marque', //normal accessorKey
        header: 'Marque',
        size: 80,
      },
      {
        accessorKey: 'prix',
        header: 'Prix',
        size: 80,
      },
      {
        accessorKey: 'qtestock',
        header: 'Quantité',
        size: 80,
      },
      {
        accessorKey: 'imageart',
        header: 'Image',
        size: 80,
        Cell: ({ cell}) => (
          <Box
          sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          }}
          >
          <img
          alt=""
          height={100}
          src={cell.getValue()}
          loading="lazy"
          style={{ borderRadius: '20%' }}
          />
          </Box>),
      },

      {
        accessorKey: '_id',
        header: 'actions',
        size: 100,
        Cell: ({ cell, row }) => (
        <div >
        <EditArticle art={cell.row.original} scategories={scategories} updateProduct={updateProduct} />
        <Button
        onClick={(e) => {
        delpr(cell.row.original._id,cell.row.original.reference, e);
        }}
        variant="danger"
        size="md"
        className="text-danger btn-link delete"
        >
        <i className="fa fa-trash" />
        </Button>
        </div>
        ),
        },
    ],
    [products],
  );
  return (
    <>
    {products&&
  <div>
       <MaterialReactTable columns={columns} data={products} />;  
       </div>
  }
  </>
  )
}

export default ArticleList
