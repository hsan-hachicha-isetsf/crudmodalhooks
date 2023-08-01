import React,{useState,useEffect} from 'react'
import { fetchArticles } from '../../services/ArticleService'
import ArticleList from './ArticleList'
const ArticlesApp = () => {
    const [products,setProducts]=useState([])
useEffect(() => {
    listproduits()
}, [])
const listproduits=()=>{
fetchArticles()
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
}
  return (
    <div>
        <ArticleList products={products}/>
    </div>
  )
}

export default ArticlesApp
