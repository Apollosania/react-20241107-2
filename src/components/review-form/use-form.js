import { useReducer } from "react";

const INITIAL_STATE = {
  text: "",
  rating: 0,
};

const SET_TEXT = "SET_TEXT";
const INCREMENT_RATING = "INCREMENT_RATING";
const DECREMENT_RATING = "DECREMENT_RATING";
const RESET = "RESET";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT:
      return { ...state, text: payload };
    case INCREMENT_RATING:
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case DECREMENT_RATING:
      return { ...state, rating: Math.max(state.rating - 1, 1) };
    case RESET:
      return { ...INITIAL_STATE };
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setText = (text) => {
    dispatch({ type: SET_TEXT, payload: text });
  };

  const incrementRating = () => {
    dispatch({ type: INCREMENT_RATING });
  };

  const decrementRating = () => {
    dispatch({ type: DECREMENT_RATING });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return { form, setText, incrementRating, decrementRating, reset };
};
