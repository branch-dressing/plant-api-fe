import { FETCH_PLANTS } from '../actions/actions';
import { reducer } from './reducer';

describe('REDUCER TESTS', () => {
  it('handle fetching plants', () => {
    const action = { 
      type: FETCH_PLANTS,
      payload: [{
        id: 123,
        commonName: 'Rose'
      }]
    };
    const initialState = { plants: null };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ 
      plants: [{
        id: 123,
        commonName: 'Rose'
      }]
    });
  });

  it('can handle action it doesnt recognize', () => {
    const action = { type: 'FERTILIZER', payload: 12 };
    const initialState = { 
      plants: [{
        id: 123,
        commonName: 'Rose'
      }]
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

});
