export type GenSlug = (text: string, len?: number) => string;

export const genSlug: GenSlug = (str, len = -0) => {
  if (typeof str === "string") {
    let strr = str
      /** Trim the whitespace */
      .trim() /** Convert to lowercase */
      .toLowerCase()
      .replace(/[^\d\w\s]/gim, "")
      /** Replace the regexp spacial character */
      .replace(/[|\\{}()[\]^$+*?.]/g, "$&")
      /** replace @ ? # ! $ % ^ & * ( ) + = from slug */
      .replace(/[\@?#\!$%\^\&*()+=:]/gm, "")
      /** Replace whitespace to "\ | /" */
      .replace(/[\/|\\]*/gim, "")
      /** Replace whitespace to " " */
      .replace(/\s+/gm, " ")
      /** Trim the whitespace */
      .trim()
      /** Replace space to - */
      .replace(/[\n]*/gim, "")
      .replace(/[_.\s\s+]/gim, "-")
      .replace(/[_.\s\s+]/gim, "-");

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

export default genSlug;