import {
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL } 
    from '../constants/restaurantConstant'

    export const restaurantListReducer = (state = { restaurants : [] }, actions) =>{
        switch (actions.type){
            case RESTAURANT_LIST_SUCCESS : return { restaurants: action.payload }

            case RESTAURANT_LIST_FAIL : return { restaurants : action.error}

            default: 
                return state
        }
    } 