import React,{useState,useEffect} from 'react'
import { fetchArticles,deleteArticle } from '../../services/ArticleService'
import { fetchSCategories } from '../../services/ScategorieService';
import ArticleList from './ArticleList'
import { confirmAlert } from 'react-confirm-alert';
import Createarticle from './Createarticle';
const ArticlesApp = () => {
  const [a,seta]=useState(5)
  const [scategories,setScategories]=useState(null)
    const [products,setProducts]=useState(null)
   
useEffect(() => {
    listproduits()
}, [])
useEffect(()=>{
  listscategories()
},[])
const listproduits=()=>{
fetchArticles()
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
}

const listscategories=()=>{
  fetchSCategories()
  .then(res=>setScategories(res.data))
  .catch(err=>console.log(err))
 }

const addproduct=(newproduit)=>{
  setProducts([newproduit,...products])
}

const updateProduct = (prmod) => {
  setProducts(
  products.map((product) =>
  product._id === prmod._id ? prmod : product
  )
  );
  };


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
       <Createarticle scategories={scategories} addproduct={addproduct}/>
      
        <ArticleList products={products} deleteProduct={deleteProduct} scategories={scategories} updateProduct={updateProduct} />
       
    </div>
  )
}

export default ArticlesApp
