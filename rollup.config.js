const typescript = require("@rollup/plugin-typescript");

module.exports = {
    input: "src/main.ts",
    output: {
        file: "out/bundle.js",
        format: "iife"
    },

    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
            outputToFilesystem: true
        })
    ]
}
