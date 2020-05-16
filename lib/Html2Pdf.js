"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require("puppeteer");
var fs = require("fs");
var Html2Pdf = /** @class */ (function () {
    function Html2Pdf(launchOptions) {
        this.launchOptions = launchOptions;
    }
    Html2Pdf.prototype.convertToFile = function (inputHtmlPath, outputPdfPath, options) {
        return __awaiter(this, void 0, void 0, function () {
            var inputData, buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readFileAsync(inputHtmlPath)];
                    case 1:
                        inputData = _a.sent();
                        return [4 /*yield*/, this.convertToBuffer(inputData, options)];
                    case 2:
                        buffer = _a.sent();
                        return [4 /*yield*/, this.writeFileAsync(outputPdfPath, buffer)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Html2Pdf.prototype.convertToBuffer = function (content, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, buffer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, puppeteer.launch((_a = this.launchOptions) !== null && _a !== void 0 ? _a : undefined)];
                    case 1:
                        browser = _b.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _b.sent();
                        return [4 /*yield*/, page.setContent(content)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, page.pdf(options !== null && options !== void 0 ? options : undefined)];
                    case 4:
                        buffer = _b.sent();
                        return [4 /*yield*/, browser.close()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(buffer);
                            })];
                }
            });
        });
    };
    Html2Pdf.prototype.readFileAsync = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        fs.readFile(path, 'utf8', function (err, data) {
                            if (err) {
                                reject(err);
                            }
                            resolve(data);
                        });
                    })];
            });
        });
    };
    Html2Pdf.prototype.writeFileAsync = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        fs.writeFile(path, data, function () {
                            resolve();
                        });
                    })];
            });
        });
    };
    return Html2Pdf;
}());
exports.default = Html2Pdf;
