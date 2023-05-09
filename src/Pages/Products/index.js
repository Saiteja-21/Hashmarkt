import React, {useEffect} from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext'
import { useFavorite } from '../../Context/FavoriteContext'
import Card from "../../Components/Card";

const Products = () => {
  const {addToCart, items} = useCart()
  const {addToFavorite, favoriteItems} = useFavorite()

  const { productList, loading, setProductID, setCategory } = useProduct();
  
  const {category_id} = useParams()
  console.log('product');

  useEffect(() => {
    setCategory(category_id)
  }, [category_id])

  return (
    <div className={styles.cardGroup}>
      {!loading ? (
        productList.map((product)=>{
          const findCartItem= items.find((item)=>item.id===product.id);
          const findFavoriteItem=favoriteItems.find((item)=>item.id===product.id)
         
          return (
            <Card findCartItem={Boolean(findCartItem)} item={product} findFavoriteItem={Boolean(findFavoriteItem)} />

            
          )
         
         


        })
          /**
           * Your code goes here
           */
       ) : (
        <Spinner />
      )} 
    </div>
  );
};

export default Products;
