import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import {getFiles} from './scripts/buildUtils';
import alias from 'rollup-plugin-alias';
const extensions = ['.js', '.ts', '.jsx', '.tsx'];
export default {
    input: [
        './src/index.ts',
        ...getFiles('./src/hooks', extensions),
        ...getFiles('./src/components', extensions),
    ],
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
    },
    plugins: [
        alias({
            resolve: extensions,
            entries: [
                {find: 'react', replacement: './node_modules/react'},
                {find: 'react-dom', replacement: './node_modules/react-dom'},
            ]
        }),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.build.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        postcss(),
        terser()
    ],
    external: [
        'react',
        'react-dom',
        'styled-components',
    ],
};
