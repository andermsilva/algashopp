import productsMocks from '../../mocks/products.json';

export default function (state = productsMocks.products, action) {

    switch (action.type) {
        case 'TOGGLE_PRODUCT':
            return state.map(pro =>
                pro.id === action.payload ?
                    { ...pro, checked: !pro.checked }
                    : pro);

        default:
            return state;
    }

}