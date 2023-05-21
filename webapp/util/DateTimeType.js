/* eslint-disable no-warning-comments */
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
      const dateTime = Date.parse(oValue);
      const currentTime = Date.now();

      // TODO: check if input is a Date object
      // if ...

      // check if input is not in the past
      if (dateTime < currentTime) {
        // @ts-ignore
        throw new sap.ui.model.ValidateException(
          "Please enter a valid date and time"
        );
      }

      console.log(oValue);
      return oValue;
    },
  });
});
