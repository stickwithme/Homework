import React from "react";

interface WithLoadingProps {
  isLoading?: boolean;
}

export function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return function WithLoadingComponent(props: T & WithLoadingProps) {
    const { isLoading, ...restProps } = props as WithLoadingProps;
    if (isLoading) {
      return <div style={{ padding: 24 }}>Loading...</div>;
    }
    return <Component {...(restProps as T)} />;
  };
}
