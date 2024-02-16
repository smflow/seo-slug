"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  genSlug: () => genSlug
});
module.exports = __toCommonJS(src_exports);
var genSlug = (str, len = -0) => {
  if (typeof str === "string") {
    let strr = str.trim().toLowerCase().replace(/[^\d\w\s]/gim, "").replace(/[|\\{}()[\]^$+*?.]/g, "$&").replace(/[\@?#\!$%\^\&*()+=:]/gm, "").replace(/[\/|\\]*/gim, "").replace(/\s+/gm, " ").trim().replace(/[\n]*/gim, "").replace(/[_.\s\s+]/gim, "-").replace(/[_.\s\s+]/gim, "-");
    while (strr.indexOf("--") >= 0) {
      strr = strr.replace("--", "-");
    }
    strr = `${strr}${`${Math.floor(
      Math.random() * Date.now() * Math.random()
    )}`.slice(0, 5)}`;
    if (len > 0) {
      strr = strr.slice(0, len);
    }
    return strr;
  }
  return "";
};
var src_default = genSlug;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  genSlug
});
