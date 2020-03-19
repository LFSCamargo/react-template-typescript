import React, { FC } from 'react';
import { Button } from '@ben/shared-ui';

import useExample from './useExample.hook';
// import noImage from '/public/images/no-image.svg';

const Example: FC = () => {
  const { isLoading, doSomething } = useExample();

  return (
    <>
      Example
      <br />
      <Button type="primary" loading={isLoading} onClick={doSomething}>
        Click Me
      </Button>
      {/* <img src={noImage} style={{ height: 50, width: 'auto' }} /> */}
    </>
  );
};

export default Example;
