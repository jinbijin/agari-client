import { NgxsConfig } from '@ngxs/store/src/symbols';

export const AGARI_NGXS_CONFIG: Partial<NgxsConfig> = {
  selectorOptions: {
    injectContainerState: false,
  },
};
