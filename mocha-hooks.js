import { restore } from 'sinon';
import { cleanup } from '@testing-library/react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

globalThis.IS_REACT_ACT_ENVIRONMENT = false;
global.fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Initialize Chai plugins
chai.use(sinonChai);

const mochaHooks = {
  afterEach() {
    restore();
    cleanup();
  },
};

export {
  mochaHooks,
};
