import { useState } from 'react';
import { message } from '@ben/shared-ui';

const useExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const doSomething = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      message.success('Done!');
    }, 2000);
  };

  return {
    isLoading,
    doSomething
  };
};

export default useExample;
