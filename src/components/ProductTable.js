import React from 'react';
import PropTypes from 'prop-types'


function ProductTable({products}) {
    return (
        <div>
         
         
         <table >
         
             {products.map(product => 
             <tr>
                 <td>{product.name}</td>
                 <td>{product.price}</td>
                 <td>{product.category}</td>
             </tr>
   )       
} 
</table>
        </div>
    )
}

ProductTable.ProTotype={    
    optionalArrayOf: PropTypes.arrayOf(PropTypes.string,PropTypes.number,PropTypes.string)}
export default ProductTable