sap.ui.define(["sap/ui/model/SimpleType"], function (SimpleType) {
  "use strict";

  return SimpleType.extend("sls.validation.emptyfieldcheck.util.DateTimeType", {
    formatValue: function (oValue) {
      return oValue;
    },

    parseValue: function (oValue) {
      return oValue;
    },

    validateValue: function (oValue) {
      const timestamp = Date.parse(oValue);
      const currentTimestamp = Date.now();

      if (timestamp < currentTimestamp) {
        // @ts-ignore
        throw new sap.ui.model.ValidateException(
          "Please enter a valid date and time"
        );
      } else {
        console.log(oValue);

        return oValue;
      }
    },
  });
});
