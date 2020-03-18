"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const express_1 = require("express");
const router = express_1.Router();
router.get('**', (req, res) => {
    res.sendFile(path_1.join(__dirname, "../public/index.html"));
});
exports.default = router;
//# sourceMappingURL=index.js.map