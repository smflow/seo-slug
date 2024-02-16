// src/index.ts
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
export {
  src_default as default,
  genSlug
};
