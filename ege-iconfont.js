module.exports = {
    "compile": {
        "syntax": "css",
        "startPoint": 51666,
        "fontName": "ege-iconfont",
        "styleFileName": "ege-iconfont",
        "selector": ".ege-icon-{{glyph}}"
    },
    "module": false,
    "stylelint": false,
    "hash": {
        "font": false,
        "style": false,
        "len": 8
    },
    "preview": true,
    "format": {
        "tabWidth": 4,
        "useTabs": false,
        "semi": true
    },
    "input": {
        "svgsDir": "./svg-icons",
        "styleTpl": null,
        "previewTpl": null
    },
    "output": {
        "font": "./iconfont",
        "style": "./css",
        "preview": "./iconfont-preview"
    }
}
