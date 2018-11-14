import { EMAIL,PASSWORD  } from './types';
export const validateEmailAction = (email1,psw1) => (
    dispatch => {
      dispatch({ type: EMAIL, payload: email1 });
      dispatch({ type: PASSWORD, payload: psw1 });

  }
    
   
);
// export const validatePswAction = psw1 => (
//   dispatch => {dispatch({ type: PASSWORD, payload: psw1 });}
 
// );