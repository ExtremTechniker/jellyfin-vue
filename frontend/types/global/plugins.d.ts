import type en from '@/../locales/en.json';
import type { JTransitionProps } from '@/components/lib/JTransition.vue';
import type { RemotePlugin } from '@/plugins/remote/types';

/**
 * The object that represents RouteMeta is defined at @/plugins/router/middleware/meta
 */
interface BackdropPayload {
  blurhash?: string;
  opacity?: number;
}
interface RouteTransition {
  enter: NonNullable<JTransitionProps['name']>;
  leave?: JTransitionProps['name'];
}
declare module 'vue-router' {
  interface RouteMeta {
    readonly layout: 'default' | 'fullpage' | 'server';
    transparentLayout?: boolean;
    transition?: RouteTransition;
    readonly admin: boolean;
    title?: string | null;
    readonly backdrop: BackdropPayload;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    readonly $remote: RemotePlugin;
  }
}

declare module 'vue-i18n' {
  type messages = typeof en;

  export interface DefineLocaleMessage extends messages {}
}

/**
 * This is important: https://stackoverflow.com/a/64189046
 * https://www.typescriptlang.org/docs/handbook/modules.html
 */

export { };
