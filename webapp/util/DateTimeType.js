/* eslint-disable no-warning-comments */
sap.ui.define(
  ["sap/ui/model/SimpleType", "sap/ui/model/ValidateException"],
  function (SimpleType, ValidateException) {
    "use strict";

    return SimpleType.extend(
      "sls.validation.emptyfieldcheck.util.DateTimeType",
      {
        formatValue: function (oValue) {
          return oValue;
        },

        parseValue: function (oValue) {
          return oValue;
        },

        validateValue: function (oValue) {
          const dateTime = Date.parse(oValue);
          const currentTime = Date.now();

          if (isNaN(dateTime) === true) {
            // @ts-ignore
            throw new ValidateException("Please enter a valid date and time");
          }

          // check if input is not in the past
          if (dateTime < currentTime) {
            // @ts-ignore
            throw new ValidateException("Please enter a date in the future");
          }

          return oValue;
        },
      }
    );
  }
);
