import { Label } from '@radix-ui/react-label';

const Root = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Root` from @rn-primitives/label/web is only supported on web.');
  }
  return null;
}) as unknown as typeof Label;

export { Root };
