import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const PLUGINS = [
    typescript()
];

export default [
    {
        input: 'src/index.ts',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' },
        ],
        plugins: PLUGINS,
    }
];