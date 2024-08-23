import babelRegister from '@babel/register';

babelRegister({
  // Array of accept conditions, either a regex or a function. (Optional)
  // File paths that match all conditions are compiled.
  only: [
    // File paths that **don't** match this regex are not compiled
    /src/,
    /lightweight-charts/,
    /fancy-canvas/,
  ],

  extensions: ['.js', '.ts', '.tsx', '.jsx'],
});
