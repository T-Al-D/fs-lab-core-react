/* QueryState handles all the Loading and Error States during an init*/

type Props<T> = {
  isLoading: boolean;
  error: Error | null;
  data: T[] | undefined;
  children: React.ReactNode;
};

export function QueryState<T>({ isLoading, error, data, children }: Props<T>) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="status-down">{error.message}</p>;
  }

  {
    /* if data undefined or no content in data */
  }
  if (data == null || data.length === 0) {
    return <p>No data available.</p>;
  }

  return <>{children}</>;
}
