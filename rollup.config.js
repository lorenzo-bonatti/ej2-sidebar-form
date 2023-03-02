import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: 'src/index.ts',
        output: [
            {file: './dist/cjs/index.js', format: 'cjs'},
            {file: './dist/index.js', format: 'esm'},
        ],
        plugins: [
            del({
                targets: ['dist/*']
            }),
            typescript(),
            postcss({
                extract: 'styles/index.scss',
                modules: true,
                minimize: true,
                use: ['sass']
            })
        ],
        external: Object.keys({
            "@syncfusion/ej2-react-buttons": ">=20",
            "@syncfusion/ej2-react-navigations": ">=20",
            "react": ">=16"
        })
    }
];