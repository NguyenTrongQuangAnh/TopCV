import * as migration_20260319_154926_init from './20260319_154926_init';

export const migrations = [
  {
    up: migration_20260319_154926_init.up,
    down: migration_20260319_154926_init.down,
    name: '20260319_154926_init',
  },
];
