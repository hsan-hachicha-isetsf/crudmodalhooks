import React,{useState,useEffect} from 'react'
import { fetchArticles,deleteArticle } from '../../services/ArticleService'
import ArticleList from './ArticleList'
import { confirmAlert } from 'react-confirm-alert';
const ArticlesApp = () => {
  const [a,seta]=useState(5)
    const [products,setProducts]=useState(null)
   
useEffect(() => {
    listproduits()
}, [])
const listproduits=()=>{
fetchArticles()
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
}

const deleteProduct = (productId,ref) => {
  confirmAlert({
    title: "Confirm delete...",
    message: " supprimer l' article: " + ref,
    buttons: [
    {
    label: 'Oui',
    onClick: () => deleteArticle(productId)
    .then(res=>
    setProducts(products.filter((product) => product._id !== productId)))
    //.then(console.log("suppression effectuée avec success"))
    .catch(error=>console.log(error))
    },
    {
    label: 'Non',
    }
    ]
    });
  };
  return (
    <div>
      
      
        <ArticleList products={products} deleteProduct={deleteProduct} a={a}/>
    </div>
  )
}

export default ArticlesApp
