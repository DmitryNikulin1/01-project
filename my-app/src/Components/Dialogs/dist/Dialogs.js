"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Dialogs_module_css_1 = require("./Dialogs.module.css");
var DialogItem = function (props) {
    var path = "dialogs/*" + props.id;
    return react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialog + ' ' + Dialogs_module_css_1["default"].active },
        react_1["default"].createElement(react_router_dom_1.NavLink, { to: path }, props.name));
};
var Dialogs = function (props) {
    return (react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialogs },
        react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialogsItems },
            react_1["default"].createElement(DialogItem, { name: "Dmitrii", id: "1" }),
            react_1["default"].createElement(DialogItem, { name: "Valera", id: "2" }),
            react_1["default"].createElement(DialogItem, { name: "Dasha", id: "3" }),
            react_1["default"].createElement(DialogItem, { name: "Artem", id: "4" }),
            react_1["default"].createElement(DialogItem, { name: "Sveta", id: "5" })),
        react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].massages },
            react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialog }, "Hi! How are you?"),
            react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialog }, "Hi. It's okay. And you?"),
            react_1["default"].createElement("div", { className: Dialogs_module_css_1["default"].dialog }, "I'm fine"))));
};
exports["default"] = Dialogs;

//# sourceMappingURL=Dialogs.js.map
