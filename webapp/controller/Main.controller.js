sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend(
    "sls.validation.emptyfieldcheck.controller.Main",
    {
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
    }
  );
});
