export const selectAllProducts = state => state.products;
export const selectSelectedProducts = state => 
          state.products.filter(pro => pro.checked);


 export const selectSelectedProductTotalPrice = state =>
                state.products
                .filter(pro => pro.checked)
                    .reduce((a,b)=> a + b.price, 0);
               
                       