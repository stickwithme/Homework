import React from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return function WithLoadingComponent(props: T & WithLoadingProps) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    const { isLoading, ...restProps } = props as WithLoadingProps;
    return <Component {...(restProps as T)} />;
  };
}
