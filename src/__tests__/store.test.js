import configureStore from 'redux-mock-store';
import actions from '../store';

const mockStore = configureStore();
const store = mockStore();

const newUser = {}

describe('newCurrentUser', () => {
    test('Dispatches the correct action', () => {
      const expectedActions = [
        {
            'newUser': 'newUser',
            'type': 'NEW_CURRENT_USER',
        },
      ];
  
      store.dispatch(actions.newCurrentUser(newUser));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });