export const QueryPreloader = ({
  isFetching,
  isLoading,
  isError,
  children,
}) => {
  if (isFetching || isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isError) {
    return <p>При загрузке произошла ошибка...</p>;
  }

  return children;
};
