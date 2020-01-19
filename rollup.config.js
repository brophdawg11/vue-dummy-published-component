import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import minimist from 'minimist';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import pkgJson from './package.json';

const argv = minimist(process.argv.slice(2));

// Map incoming --format args to the expected output filenames based on package.json
const fileTypeMap = {
    umd: pkgJson.main.split('/').splice(-1),
    es: pkgJson.module.split('/').splice(-1),
    iife: pkgJson.unpkg.split('/').splice(-1),
};

export default {
    input: 'src/index.js',
    output: {
        // Global name of the component in UMD builds (i.e., window.DummyComponent)
        name: 'DummyComponent',
        file: `dist/${fileTypeMap[argv.format]}`,
        exports: 'named',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
            template: {
                isProduction: true,
            },
        }),
        buble(),
        // Only minify browser (iife) version
        ...(argv.format === 'iife' ? [terser()] : []),
    ],
};
