import { Reducer } from '@reduxjs/toolkit';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [
    { id: 1, name: 'RB Livin' }
  ],
  error: false,
  loading: false
}

// eslint-disable-next-line default-param-last
const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case RepositoriesTypes.LOAD_REQUEST:
      return {...state, loading: true};
    case RepositoriesTypes.LOAD_SUCCESS:
      return {...state, loading: false, error: false, data: action.payload.data};
    case RepositoriesTypes.LOAD_FAILURE:
      return {...state, loading: false, error: true, data: []};
    default:
      return state;
  }
}

export default reducer;