import React, { useEffect } from 'react';

export const Delay = ({ ms, children }: any) => {
  const [hidden, setHidden] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(false);
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return hidden ? null : children;
};
