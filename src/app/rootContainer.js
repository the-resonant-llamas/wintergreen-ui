'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-materialize';

const RootContainer = function() {
  return (
    <div>
      <h1 className="red-text">Hello World</h1>
      <Button waves='light'>Button</Button>
    </div>
  );
}

module.exports = RootContainer;
