sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException",
    "sap/ui/core/Core",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
  ],
  function (
    BaseController,
    JSONModel,
    SimpleType,
    ValidateException,
    Core,
    MessageBox,
    MessageToast
  ) {
    "use strict";

    return BaseController.extend(
      "sls.validation.emptyfieldcheck.controller.Main",
      {
        onInit: function () {
          const oView = this.getView(),
            oMM = Core.getMessageManager();

          oView.setModel(new JSONModel({ name: "", email: "" }));

          // attach handlers for validation errors
          oMM.registerObject(oView.byId("nameInput"), true);
          oMM.registerObject(oView.byId("emailInput"), true);
        },

        _validateInput: function (oInput) {
          let sValueState = "None";
          let bValidationError = false;
          const oBinding = oInput.getBinding("value");

          try {
            oBinding.getType().validateValue(oInput.getValue());
          } catch (oException) {
            sValueState = "Error";
            bValidationError = true;
          }

          oInput.setValueState(sValueState);

          return bValidationError;
        },

        onNameChange: function (oEvent) {
          const oInput = oEvent.getSource();

          this._validateInput(oInput);
        },

        onSubmit: function () {
          // collect input controls
          const oView = this.getView();
          const aInputs = [oView.byId("nameInput"), oView.byId("emailInput")];
          let bValidationError = false;

          // Check that inputs are not empty.
          // Validation does not happen during data binding as this is only triggered by user actions.
          aInputs.forEach(function (oInput) {
            bValidationError = this._validateInput(oInput) || bValidationError;
          }, this);

          if (!bValidationError) {
            MessageToast.show(
              "The input is validated. Your form has been submitted."
            );
          } else {
            MessageBox.alert(
              "A validation error has occurred. Complete your input first."
            );
          }
        },

        /**
         * Custom model type for validating an E-Mail address
         * @class
         * @extends sap.ui.model.SimpleType
         */
        customEMailType: SimpleType.extend("email", {
          formatValue: function (oValue) {
            return oValue;
          },

          parseValue: function (oValue) {
            //parsing step takes place before validating step, value could be altered here
            return oValue;
          },

          validateValue: function (oValue) {
            // The following Regex is only used for demonstration purposes and does not cover all variations of email addresses.
            // It's always better to validate an address by simply sending an e-mail to it.
            const rexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
            if (!oValue.match(rexMail)) {
              throw new ValidateException(
                "'" + oValue + "' is not a valid e-mail address"
              );
            }
          },
        }),
      }
    );
  }
);
