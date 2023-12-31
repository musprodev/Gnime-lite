var name = require("../Setting");
var commands = [];
function Module_Exports(_0x20fc25, _0x382132) {
  _0x20fc25["function"] = _0x382132;
  if (!_0x20fc25.dontAddCommandList) {
    _0x20fc25.dontAddCommandList = false;
  }
  if (!_0x20fc25.infocmd) {
    _0x20fc25.infomd = '';
  }
  if (!_0x20fc25.fromMe) {
    _0x20fc25.fromMe = false;
  }
  if (!_0x20fc25.kingclass) {
    _0x20fc25.kingclass = "misc";
  }
  if (!_0x20fc25.kingpath) {
    _0x20fc25.kingpath = "HIDDEN";
  }
  commands.push(_0x20fc25);
  return _0x20fc25;
}
module.exports = {
  'Module_Exports': Module_Exports,
  'AddCommand': Module_Exports,
  'Function': Module_Exports,
  'Module': Module_Exports,
  'cmd': Module_Exports,
  'smd': Module_Exports,
  'commands': commands
};