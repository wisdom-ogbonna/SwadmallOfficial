import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
import productReducer from './product.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,


});

export default rootReducer;