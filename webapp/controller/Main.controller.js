sap.ui.define(
  ["./BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend(
      "sls.validation.emptyfieldcheck.controller.Main",
      {
        onInit: function () {
          const oModel = new JSONModel({
            plz: "",
          });

          this.getView().setModel(oModel);
        },

        validateInputs: function (oEvent) {
          // this function gets the first textfield
          const emailTextField = this.getView().byId("email");

          //this function checks its value, you can insert more checks on the value
          if (emailTextField.getValue() === "") {
            alert("Please enter an email adress.");
          }

          const nameTextField = this.getView().byId("name");

          if (nameTextField.getValue() === "") {
            alert("Please enter a name.");
          }
        },

        onChange: function () {
          // if (this.getValue() === "")
          //   this.setValueState(sap.ui.core.ValueState.Error);
          // else this.setValueState(sap.ui.core.ValueState.Success);
        },
      }
    );
  }
);
