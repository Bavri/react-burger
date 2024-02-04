module.exports = {
   extends: [
      'prettier',
   ],

   parser: '@typescript-eslint/parser',

   parserOptions: {

      ecmaFeatures: {

         jsx: true,

      },

      ecmaVersion: 'latest',

      sourceType: 'module',

   },

   plugins: [

      'react',

      '@typescript-eslint',

      'react-hooks',
      'unused-imports',

   ],

   rules: {

      'semi':2,

      'unused-imports/no-unused-imports': 2,

      'jsx-a11y/tabindex-no-positive': 0,

      'react/jsx-indent': [2, 3],

      'react/jsx-indent-props': [2, 3],

      indent: [2, 3],

      'react/jsx-filename-extension': [

         2,

         {

            extensions: ['.js', '.jsx', '.tsx'],

         },

      ],

      'import/no-unresolved': 'off',

      'no-trailing-spaces': 2,

      'import/prefer-default-export': 'off',

      'no-unused-vars': 2,

      'react/require-default-props': 'off',

      'react/react-in-jsx-scope': 'off',

      'react/jsx-props-no-spreading': 'warn',

      'react/function-component-definition': 'off',

      'no-shadow': 'off',

      'import/extensions': 'off',

      'import/no-extraneous-dependencies': 'off',

      'no-underscore-dangle': 'off',

      'max-len': [

         'error',

         {

            ignoreComments: true,

            code: 125,

         },

      ],

      'padding-line-between-statements': ['warn', {

         blankLine: 'always',

         prev: '*',

         next: 'class'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'for'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'function'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'if'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'return'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'switch'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'try'

      }, {

         blankLine: 'always',

         prev: '*',

         next: 'while'

      }, {

         blankLine: 'always',

         prev: 'block-like',

         next: ['let', 'const']

      }],

      'jsx-a11y/no-static-element-interactions': 'off',

      'jsx-a11y/click-events-have-key-events': 'off',

      'react-hooks/rules-of-hooks': 'error',

      // Checks rules of Hooks

      //  'react-hooks/exhaustive-deps': 'w',

      // Checks effect dependencies,

      'no-param-reassign': 'off',

      'quotes': [2, 'single', { 'avoidEscape': true }],

      'no-console': 2,

      'no-undef': 'off',

      'react/no-array-index-key': 'off',

      'arrow-body-style': 'off',

      'react/jsx-max-props-per-line': ['error', { maximum: 4 }],

      'react/no-unstable-nested-components': 'warn'

   },

};