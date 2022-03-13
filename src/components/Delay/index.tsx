import React, { useEffect } from 'react';

type DelayProps = {
  ms: number;
  children: JSX.Element;
};

function Delay({ ms, children }: DelayProps) {
  const [hidden, setHidden] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(false);
    }, ms);

    return () => clearTimeout(timeout);
  }, []);

  return hidden ? null : children;
}

export default Delay;
