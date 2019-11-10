// const path = require("path"),
//   fs = require("fs");

// const ITEM_ATLAS = 181116,
//   ITEM_JOURNAL = 181117,
//   CONTRACT_ATLAS = 53,
//   CONTRACT_JOURNAL = 54;

// const specialCases = {
//   "7015": 71001,
//   "7013": 75001,
//   "7021": 80001,
//   "7022": 79001,
//   "7023": 77001
// };

 module.exports = function InfinityJournal(dispatch) {
//   let cid = null,
//     serverLocations = [],
//     customLocations = [],
//     slotAtlas = -1,
//     slotJournal = -1,
//     currentContract = null,
//     teleportingTo = null,
//     newCustom = "";

//   try {
//     customLocations = require("./journal.json");
//   } catch (e) {}

//   ////Commands
//   dispatch.command.add("journal", (name, province) => {
//     if (!currentContract || currentContract.type != CONTRACT_JOURNAL) {
//       message(
//         '<font color="#ff0000">Travel journal must be open to save custom locations.</font>'
//       );
//       return false;
//     }

//     newCustom = name;
//     if (province) newCustom += "\t" + province;

//     dispatch.toServer("C_ADD_TELEPORT_TO_POS_LIST", 1, { name: "*\t*" });

//     return false;
//   });

//   ////Hooks
//   dispatch.game.on("enter_game", () => {
//     cid = dispatch.game.me.gameId;
//     slotAtlas = slotJournal = -1;
//     currentContract = teleportingTo = null;
//   });

//   dispatch.hook("S_REQUEST_CONTRACT", 1, event => {
//     currentContract = event;
//   });
//   dispatch.hook("S_CANCEL_CONTRACT", 1, event => {
//     currentContract = null;
//   });
//   dispatch.hook("S_ACTION_END", 5, event => {
//     if (event.gameId === cid && event.type != 37)
//       teleportingTo = currentContract = null;
//   });

//   dispatch.hook("C_TELEPORT_TO_POS", 1, event => {
//     if (event.index >= serverLocations.length) {
//       if (slotAtlas != -1) {
//         teleportingTo = customLocations[event.index - serverLocations.length];
//         dispatch.toServer("C_PCBANGINVENTORY_USE_SLOT", 1, { slot: slotAtlas });
//       } else
//         message(
//           '<font color="#ff0000">You must have Elite status to teleport to a custom location.</font>'
//         );
//       return false;
//     }
//   });

//   dispatch.hook("C_DELETE_TELEPORT_TO_POS_LIST", 1, event => {
//     if (event.index >= serverLocations.length) {
//       customLocations.splice(event.index - serverLocations.length, 1);
//       saveCustom();
//       dispatch.toClient("S_LOAD_TELEPORT_TO_POS_LIST", 1, {
//         locations: serverLocations.concat(getCustomLocations())
//       });
//       return false;
//     }
//   });

//   dispatch.hook("S_PCBANGINVENTORY_DATALIST", 1, event => {
//     slotAtlas = -1;
//     slotJournal = -1;

//     for (let inv of event.inventory)
//       if (inv.item == ITEM_ATLAS) slotAtlas = inv.slot;
//       else if (inv.item == ITEM_JOURNAL) slotJournal = inv.slot;
//   });

//   dispatch.hook("S_LOAD_TELEPORT_TO_POS_LIST", 1, event => {
//     for (let i = 0; i < event.locations.length; i++) {
//       let loc = event.locations[i];

//       if (loc.name == "*\t*") {
//         if (newCustom) {
//           customLocations.push({
//             zone: loc.zone,
//             x: loc.x,
//             y: loc.y,
//             z: loc.z,
//             name: newCustom
//           });
//           customLocations.sort((a, b) => a.name.localeCompare(b.name));
//           saveCustom();
//           message("Journal saved.");
//           newCustom = "";
//         }

//         dispatch.toServer("C_DELETE_TELEPORT_TO_POS_LIST", 1, { index: i });
//         event.locations.splice(i, 1); // Never display temporary entries
//         i--;
//       } else loc.name += " *"; // Mark server per-character locations as different from custom shared ones
//     }

//     serverLocations = event.locations;
//     event.locations = event.locations.concat(getCustomLocations());
//     return true;
//   });

//   dispatch.hook("S_VILLAGE_LIST_TO_TELEPORT", 1, event => {
//     if (teleportingTo) {
//       for (let loc of event.locations)
//         if (
//           loc.zone == teleportingTo.zone ||
//           specialCases[teleportingTo.zone]
//         ) {
//           dispatch.toServer("C_TELEPORT_TO_VILLAGE", 1, {
//             id: specialCases[teleportingTo.zone]
//               ? specialCases[teleportingTo.zone]
//               : loc.id
//           });
//           return false;
//         }

//       message(
//         '<font color="#ff0000">Zone ' +
//           teleportingTo.zone +
//           " not found in Village Atlas.</font>"
//       );
//       teleportingTo = null;
//     }
//   });

//   dispatch.hook("S_LOAD_TOPO", 3, event => {
//     if (teleportingTo) {
//       event.loc.x = teleportingTo.x;
//       event.loc.y = teleportingTo.y;
//       event.loc.z = teleportingTo.z;
//       return true;
//     }
//   });

//   dispatch.hook("S_SPAWN_ME", 3, event => {
//     if (teleportingTo) {
//       event.loc.x = teleportingTo.x;
//       event.loc.y = teleportingTo.y;
//       event.loc.z = teleportingTo.z;
//       return true;
//     }
//   });

//   ////Functions
//   function getCustomLocations() {
//     let custom = [];

//     for (let l of customLocations)
//       custom.push({
//         unk: 0,
//         zone: l.zone,
//         x: l.x,
//         y: l.y,
//         z: l.z,
//         name: l.name.includes("\t") ? l.name : l.name + "\t"
//       });

//     return custom;
//   }

//   function saveCustom() {
//     fs.writeFileSync(
//       path.join(__dirname, "journal.json"),
//       JSON.stringify(customLocations)
//     );
//   }

//   function message(msg) {
//     dispatch.command.message(msg);
//   }
 };
