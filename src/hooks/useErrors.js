import { useCallback, useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback((field, message) => {
    const errorAlreadyExists = errors.some((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors]);

  const removeError = useCallback((field) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== field,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback((field) => (
    errors.find((error) => error.field === field)?.message
  ), [errors]);

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
