import React from "react";
import { Link } from "react-router-dom";
import Catalog from "./catalog.json";

const Shop = ({ handleViewItem }) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  const products = Catalog.map((product) => {
    return (
      // made a handle click here heano
      <div key={product.id} onClick={() => handleViewItem(product.id)}>
        <Link key={product.id} to={`/Shop/${product.id}`} itemID={product.id}>
          <img src={images[product.imgs]} alt="" />
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${product.imgs})`,
            }}
          ></div>
          <h1>{product.name}</h1>
        </Link>
        <p>${product.price}</p>
      </div>
    );
  });

  return <div>{products}</div>;
};

export default Shop;

// const [selectedItems, setSelectedItems] = useState([]);
// const [pushProduct , setPushProduct] = useState([])

// const handleItem = (e) => {
//   handleCartList(e);
//   // handleProduct(e);

// };
// const handleCartList = (item) => {
//   setSelectedItems((selectedItems) => [...selectedItems, item]);
//   console.log(item)
//   console.log(selectedItems)

// };
// const handleProduct =(item)=>{
//   setPushProduct(item)
//   console.log(item);
// };

//   const handleSelectedItem =(item)=>{

//     // console.log(item);
//     // setSelectedItem(item)
//     // console.log(selectedItem)
//   setSelectedItem((selectedItem)=> [...selectedItem, item])
//   console.log(item);
//     console.log(item.id)
//     console.log(selectedItem)

// }

// const handleID =(id)=>{
//   setSelectedID((selectedID)=> [...selectedID, id])
//   console.log(id);
//   if(item.id === id){
//     console.log(id);
//     previewID();
//   }

// }
// const previewID = ()=>{

// }

// const handleListLogic = (item) => {
//   if (!selectedItems.includes(item)) {
//     handleItem(item);

//     console.log(selectedItems);
//   } else {

//     console.log(selectedItems);
//   }
// };
