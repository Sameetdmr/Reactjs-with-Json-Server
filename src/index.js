import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
    
        render() {
          return <tr>  
          <td>{this.props.product.productID}</td>  
          <td>{this.props.product.productName}</td>  
          <td>{this.props.product.productPrice}</td>  
          <td>{this.props.product.inStock}</td>   
		  <td>  <a href={'ProductDetail'+this.props.product.productID}>detay</a></td>
      </tr> ;
        }
      }

  class Index extends React.Component {

		 state = {
			ProductList: []
		};
	  
	  componentDidMount() {
		fetch('http://localhost:3000/products')
		.then(res => res.json())
		.then((data) => {
		this.setState({ ProductList: data.Products})
		//console.log(this.state.Products)
		  console.log(data)
		  
		})
		.catch(console.log)
	  }
	  
	render() {
		console.log(this.state.ProductList)
		const productHtmlList = this.state.ProductList.map((s,i) => (
			
			<Product key={s.productID}  product={s} />
		 ));

	  return (
		<div>
		<h1>Ürün Listesi</h1>

		<table className="table">  
	   <thead>  
		   <tr>  
			  <th>productID</th>  
			  <th>productName</th>  
			  <th>productPrice</th>  
			  <th>inStock</th>  
		   </tr>  
	   </thead>  
	
		<tbody>  
			
			{productHtmlList}
		</tbody>   	
	
	</table> 
		</div>
	  );
	}
  }
  
  
  ReactDOM.render(<Index />, document.getElementById('app'));