import { Label } from '@radix-ui/react-label';
import { Text } from '@rn-primitives/core/dist/web';
import { withRNPrimitives } from '@rn-primitives/utils';

const Root = withRNPrimitives(Label, 'pressable');

export { Root, Text };
