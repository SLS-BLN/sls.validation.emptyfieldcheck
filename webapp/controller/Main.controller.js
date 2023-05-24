sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sls/validation/emptyfieldcheck/util/PasswordType",
    "sls/validation/emptyfieldcheck/util/DateTimeType",
    "sls/validation/emptyfieldcheck/util/EmailType",
  ],
  function (
    BaseController,
    JSONModel,
    MessageBox,
    MessageToast,
    PasswordType,
    DateTimeType,
    EmailType
  ) {
    "use strict";

    return BaseController.extend(
      "sls.validation.emptyfieldcheck.controller.Main",
      {
        onInit: function () {
          const oView = this.getView();

          oView.setModel(
            new JSONModel({
              name: "",
              email: "",
              age: null,
              date: null,
              pwd: "",
            })
          );
        },

        types: {
          password: new PasswordType(),
          dateTime: new DateTimeType(),
          email: new EmailType(),
        },

        onSubmitFieldGroup: function () {
          if (this.validateFieldGroup("personalInfo")) {
            const msg =
              "Your input could not be validated. Complete your input first.";
            MessageBox.alert(msg);
          }
        },

        onSubmit: function () {
          // collect input controls
          const oView = this.getView();
          const aInputs = [
            oView.byId("nameInput"),
            oView.byId("emailInput"),
            oView.byId("ageInput"),
            oView.byId("passwordInput"),
            oView.byId("dateTimeInput"),
          ];
          let bValidationError = false;

          aInputs.forEach(function (oInput) {
            bValidationError = this._validateInput(oInput) || bValidationError;
          }, this);

          if (!bValidationError) {
            const msg = "The input is validated. Your form has been submitted.";

            MessageToast.show(msg);
          } else {
            const msg =
              "A validation error has occurred. Complete your input first.";

            MessageBox.alert(msg);
          }
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

        onReset: function () {
          const oView = this.getView();
          const oModel = oView.getModel();

          oModel.setProperty("/name", "");
          oModel.setProperty("/email", "");
          oModel.setProperty("/age", null);
          oModel.setProperty("/date", null);
          oModel.setProperty("/pwd", "");

          const aInputs = [
            oView.byId("nameInput"),
            oView.byId("emailInput"),
            oView.byId("ageInput"),
            oView.byId("passwordInput"),
            oView.byId("dateTimeInput"),
          ];

          aInputs.forEach(function (oInput) {
            oInput.setValueState("None");
          });
        },
      }
    );
  }
);
