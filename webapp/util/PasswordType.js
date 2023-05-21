sap.ui.define(["sap/ui/model/SimpleType"], function (SimpleType) {
  "use strict";

  return SimpleType.extend("sls.validation.emptyfieldcheck.util.PasswordType", {
    formatValue: function (oValue) {
      return oValue;
    },

    parseValue: function (oValue) {
      return oValue;
    },

    validateValue: function (oValue) {
      if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/.test(oValue)) {
        // @ts-ignore
        throw new sap.ui.model.ValidateException(
          "Password: 8-16 digits, letters and numbers"
        );
      } else {
        return oValue;
      }
    },
  });
});
