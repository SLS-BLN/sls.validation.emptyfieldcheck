sap.ui.define(["sap/ui/model/SimpleType"], function (SimpleType) {
  "use strict";

  return SimpleType.extend("sls.validation.emptyfieldcheck.util.EmailType", {
    formatValue: function (oValue) {
      return oValue;
    },

    parseValue: function (oValue) {
      return oValue;
    },

    validateValue: function (oValue) {
      const regexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

      if (!oValue.match(regexMail)) {
        // @ts-ignore
        throw new sap.ui.model.ValidateException(
          `${oValue} is not a valid e-mail address`
        );
      } else {
        return oValue;
      }
    },
  });
});
