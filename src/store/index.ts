import { configureStore, Store } from '@reduxjs/toolkit';
import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: RepositoriesState
}

const store: Store<ApplicationState> = configureStore({reducer: rootReducer});

export default store;