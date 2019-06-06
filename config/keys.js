if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// prod googleClientID: 268724871357-0a8a7423oovsmfov5h4kb308prjk07pv.apps.googleusercontent.com
// prod googleClientSecret: DxLViRNza3GWn4qPO6PTUThv
// mongoURI: mongodb+srv://admin:<password>@node-app-prod-pjrsf.mongodb.net/test?retryWrites=true&w=majority
