import { Theme } from '@styles/constants';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
