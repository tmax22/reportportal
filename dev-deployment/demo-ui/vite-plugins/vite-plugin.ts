export function transformStylesPlugin() {
  return {
    name: "transform-styles", // Plugin name
    transform(code, id) {
      // console.log(id);
      // Check if the file ends with .scss and contains 'import styles'
      const importRegex = /^import\s+(styles)\s+from\s+['"].+\.scss['"];?/gm;

      if (importRegex.test(code)) {
        code = code.replace(importRegex, (match, capturedGroup) => {
          return match.replace(capturedGroup, "* as styles");
        });
      }
      return {
        code, // Return transformed code
        map: null, // You can generate source maps if needed
      };
    },
  };
}

// import React from 'react';
// import React, { PureComponent, Fragment } from 'react';
// import  { PureComponent, Fragment } React from 'react';

export function injectReactImportIfNeeded() {
  return {
    name: "inject-react-import", // Plugin name
    transform(code, id) {
      if (/\.[jt]sx?$/.test(id)) {
        if (!/import.*?React.*?from\s+['"]react['"]\s*;?/gm.test(code)) {
          code = "import React from 'react';\n" + code;
        }
      }
      return {
        code, // Return transformed code
        map: null, // You can generate source maps if needed
      };
    },
  };
}

// const Color = require('color');

export function replaceRequireWithImport() {
  return {
    name: "replace-require-with-import", // Plugin name
    transform(code, id) {
      if (/\.[jt]sx?$/.test(id)) {
        code = code.replace(
          /^const\s+(\w+)\s+=\s+require\(['"](.+)['"]\);?/gm,
          (match, capturedGroup1, capturedGroup2) => {
            return `import ${capturedGroup1} from '${capturedGroup2}';`;
          }
        );
      }
      return {
        code, // Return transformed code
        map: null, // You can generate source maps if needed
      };
    },
  };
}
