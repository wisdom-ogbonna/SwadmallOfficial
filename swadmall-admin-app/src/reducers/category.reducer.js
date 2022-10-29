import { categoryConstansts } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};


export default (state = initState, action) => {
    switch(action.type){
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            // const category = action.payload.category;
            // const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
            // console.log('updated categoires', updatedCategories);
            
            state = {
                ...state,
                // categories: updatedCategories,
                loading: false,
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState
            }
            break;
    }

    return state;
}