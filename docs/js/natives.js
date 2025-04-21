const natives = {
    "server": {
        "character": [
            {"name": "CreateCharacter", "path": "/server/character/createCharacter.md", "type": "server"},
            {"name": "GetCharacterFromCharacterId", "path": "/server/character/getCharacterFromCharacterId.md", "type": "server"},
            {"name": "AddCharacterToDatabase", "path": "/server/character/addCharacterToDatabase.md", "type": "server"},
            {"name": "GetDefaultCharacter", "path": "/server/character/getDefaultCharacter.md", "type": "server"},
            {"name": "GetCharacterIdFromDefaultCharacter", "path": "/server/character/getCharacterIdFromDefaultCharacter.md", "type": "server"},
            {"name": "ChangeDefaultCharacter", "path": "/server/character/changeDefaultCharacter.md", "type": "server"},
            {"name": "GetDBCharacterFromCharacterId", "path": "/server/character/getDBCharacterFromCharacterId.md", "type": "server"},
            {"name": "GetCharactersFromPlayer", "path": "/server/character/getCharactersFromPlayer.md", "type": "server"},
            {"name": "UpdateCharacter", "path": "/server/character/UpdateCharacter.md", "type": "server"},
            {"name": "PermanentlyDeleteCharacterFromDatabse", "path": "/server/character/permanentlyDeleteCharacterFromDatabse.md", "type": "server"},
            {"name": "GetCountCharacterFromPlayer", "path": "/server/character/getCountCharacterFromPlayer.md", "type": "server"},
            {"name": "CanCreateCharacter", "path": "/server/character/canCreateCharacter.md", "type": "server"}
        ],
        "player": [
            {"name": "RemovePlayerFromGroup", "path": "/server/player/removePlayerFromGroup.md", "type": "server"},
            {"name": "AddGroupToPlayer", "path": "/server/player/addGroupToPlayer.md", "type": "server"},
            {"name": "GetPlayerGroup", "path": "/server/player/getPlayerGroup.md", "type": "server"},
            {"name": "CreatePlayer", "path": "/server/player/createPlayer.md", "type": "server"},
            {"name": "GetPlayerIdentifiers", "path": "/server/player/getPlayerIdentifiers.md", "type": "server"},
            {"name": "SaveDBPlayer", "path": "/server/player/saveDbPlayer.md", "type": "server"},
            {"name": "SetPlayerCharacterSlots", "path": "/server/player/setPlayerCharacterSlots.md", "type": "server"},
            {"name": "RemovePlayerFromDatabase", "path": "/server/player/removePlayerFromDatabase.md", "type": "server"},
            {"name": "GetNumSlotsCharacterFromPlayer", "path": "/server/player/getNumSlotsCharacterFromPlayer.md", "type": "server"},
            {"name": "AddPlayerToDatabse", "path": "/server/player/addPlayerToDatabse.md", "type": "server"},
            {"name": "DoesPlayerExistFromDatabase", "path": "/server/player/doesPlayerExistFromDatabase.md", "type": "server"},
            {"name": "GetCountOfCoinsFromPlayer", "path": "/server/player/getCountOfCoinsFromPlayer.md", "type": "server"},
            {"name": "GetPlayerLevelVIP", "path": "/server/player/getPlayerLevelVIP.md", "type": "server"},
            {"name": "GetPlayerInfoDateFromDatabase", "path": "/server/player/getPlayerInfoDateFromDatabase.md", "type": "server"},
            {"name": "GetPlayerUUID", "path": "/server/player/getPlayerUUID.md", "type": "server"}
        ],
        "acl": [
            {"name": "RemoveAce", "path": "/server/acl/removeAcl.md", "type": "server"},
            {"name": "AddAce", "path": "/server/acl/removeAcl.md", "type": "server"},
            {"name": "RemovePrincipal", "path": "/server/acl/removeAcl.md", "type": "server"},
            {"name": "AddPrincipal", "path": "/server/acl/removeAcl.md", "type": "server"}
        ],
        "discord": [
            {"name": "SetDiscordLog", "path": "/server/discord/setDiscordLog.md", "type": "server"},
            {"name": "GetDiscordInfoFromDiscordId", "path": "/server/discord/getDiscordInfoFromDiscordId.md", "type": "server"}
        ],
        "event": [
            {"name": "RegisterServerCallback", "path": "/server/event/registerServerCallback.md", "type": "server"},
            {"name": "TriggerClientCallback", "path": "/server/event/triggerClientCallback.md", "type": "server"},
            {"name": "TriggerClientCallbackAwait", "path": "/server/event/TriggerClientCallbackAwait.md", "type": "server"}
        ],
        "command": [
            {"name": "NewCommand", "path": "/server/command/newCommand.md", "type": "server"}
        ],
        "database": [
            {"name": "MYSQL_AQUERY", "path": "/server/database/mysql_aquery.md", "type": "server"},
            {"name": "MYSQL_QUERY", "path": "/server/database/mysql_query.md", "type": "server"},
            {"name": "MYSQL_INSERT", "path": "/server/database/mysql_insert.md", "type": "server"},
            {"name": "MYSQL_AINSERT", "path": "/server/database/mysql_ainsert.md", "type": "server"},
            {"name": "MYSQL_UPDATE", "path": "/server/database/mysql_update.md", "type": "server"},
            {"name": "MYSQL_AUPDATE", "path": "/server/database/mysql_aupdate.md", "type": "server"},
            {"name": "MYSQL_APREPARE", "path": "/server/database/mysql_aprepare.md", "type": "server"},
            {"name": "MYSQL_PREPARE", "path": "/server/database/mysql_prepare.md", "type": "server"},
            {"name": "MYSQL_APREPARE", "path": "/server/database/mysql_aprepare.md", "type": "server"},
            {"name": "MYSQL_ARAWEXECUTE", "path": "/server/database/mysql_arawexecute.md", "type": "server"},
            {"name": "MYSQL_RAWEXECUTE", "path": "/server/database/mysql_rawexecute.md", "type": "server"},
            {"name": "MYSQL_ASCALAR", "path": "/server/database/mysql_ascalar.md", "type": "server"},
            {"name": "MYSQL_SCALAR", "path": "/server/database/mysql_scalar.md", "type": "server"},
            {"name": "MYSQL_ASINGLE", "path": "/server/database/mysql_asingle.md", "type": "server"},
            {"name": "MYSQL_SINGLE", "path": "/server/database/mysql_single.md", "type": "server"},
            {"name": "MYSQL_ATRANSACTION", "path": "/server/database/mysql_atransaction.md", "type": "server"},
            {"name": "MYSQL_TRANSACTION", "path": "/server/database/mysql_transaction.md", "type": "server"},
            {"name": "MYSQL_READY", "path": "/server/database/mysql_ready.md", "type": "server"}
        ],
        "vehicles": [
            {"name": "GetVehiclesOfOwner", "path": "/server/vehicles/getVehiclesOfOwner.md", "type": "server"},
            {"name": "AddVehicleToDataBase", "path": "/server/vehicles/addVehicleToDataBase.md", "type": "server"},
            {"name": "IsPlateAvaible", "path": "/server/vehicles/isPlateAvaible.md", "type": "server"},
        ],
    },
    "client": {
        "character": [
            {"name": "GetCountOfCharacters", "path": "/client/character/getCountOfCharacters.md", "type": "client"},
            {"name": "GetCharacters", "path": "/client/character/getCharacters.md", "type": "client"},
            {"name": "GetCharactersFromCharacterId", "path": "/client/character/getCharactersFromCharacterId.md", "type": "client"},
            {"name": "GetDefaultCharacter", "path": "/client/character/getDefaultCharacter.md", "type": "client"},
            {"name": "ChangeDefaultCharacter", "path": "/client/character/changeDefaultCharacter.md", "type": "client"},
            {"name": "CreateCharacter", "path": "/client/character/createCharacter.md", "type": "client"},
            {"name": "DeleteCharacter", "path": "/client/character/deleteCharacter.md", "type": "client"},
            {"name": "CreateCharacter", "path": "/client/character/createCharacter.md", "type": "client"}
        ],
        "player": [
            {"name": "GetPlayerData", "path": "/client/player/getPlayerData.md", "type": "client"},
            {"name": "CreatePlayer", "path": "/client/player/createPlayer.md", "type": "client"}
        ],
        "discord": [
            {"name": "SetDiscordLog", "path": "/client/discord/setDiscordLog.md", "type": "client"},
            {"name": "GetDiscordInfoFromDiscordId", "path": "/client/discord/getDiscordInfoFromDiscordId.md", "type": "client"}
        ],
        "event": [
            {"name": "RegisterClientCallback", "path": "/client/event/registerServerCallback.md", "type": "client"},
            {"name": "TriggerServerCallback", "path": "/client/event/triggerClientCallback.md", "type": "client"},
            {"name": "TriggerServerCallbackAwait", "path": "/client/event/TriggerClientCallbackAwait.md", "type": "client"}
        ],
        "raycast": [
            {"name": "GetRaycastFromCoords", "path": "/client/raycast/getRaycastFromCoords.md", "type": "client"},
            {"name": "GetRaycastFromCoords2", "path": "/client/raycast/getRaycastFromCoords2.md", "type": "client"},
            {"name": "GetRaycastFromCamera", "path": "/client/raycast/getRaycastFromCoords.md", "type": "client"}
        ]
    },
    "shared": {
        "player": [
            {"name": "GetClosestPlayer", "path": "/shared/player/getClosestPlayer.md", "type": "shared"},
            {"name": "GetClosestPed", "path": "/shared/player/getClosestPed.md", "type": "shared"},
            {"name": "GetClosestVehicle", "path": "/shared/player/getClosestVehicle.md", "type": "shared"},
            {"name": "GetClosestObject", "path": "/shared/player/getClosestObject.md", "type": "shared"},
            {"name": "GetNearbyPlayers", "path": "/shared/player/getNearbyPlayers.md", "type": "shared"},
            {"name": "GetNearbyPeds", "path": "/shared/player/getNearbyPeds.md", "type": "shared"},
            {"name": "GetNearbyVehicle", "path": "/shared/player/getNearbyVehicle.md", "type": "shared"},
            {"name": "GetNearbyObjects", "path": "/shared/player/getNearbyObjects.md", "type": "shared"}
        ],
        "table": [
            {"name": "table.forEach", "path": "/shared/table/table.forEach.md", "type": "shared"},
            {"name": "table.find", "path": "/shared/table/table.find.md", "type": "shared"},
            {"name": "table.from", "path": "/shared/table/table.from.md", "type": "shared"},
            {"name": "table.at", "path": "/shared/table/table.at.md", "type": "shared"},
            {"name": "table.merge", "path": "/shared/table/table.merge.md", "type": "shared"},
            {"name": "table.every", "path": "/shared/table/table.every.md", "type": "shared"},
            {"name": "table.filter", "path": "/shared/table/table.filter.md", "type": "shared"},
            {"name": "table.findIndex", "path": "/shared/table/table.findIndex.md", "type": "shared"},
            {"name": "table.indexOf", "path": "/shared/table/table.indexOf.md", "type": "shared"},
            {"name": "table.join", "path": "/shared/table/table.join.md", "type": "shared"},
            {"name": "table.pop", "path": "/shared/table/table.pop.md", "type": "shared"},
            {"name": "table.push", "path": "/shared/table/table.push.md", "type": "shared"},
            {"name": "table.shift", "path": "/shared/table/table.shift.md", "type": "shared"},
            {"name": "table.slice", "path": "/shared/table/table.slice.md", "type": "shared"},
            {"name": "table.toReversed", "path": "/shared/table/table.toReversed.md", "type": "shared"},
            {"name": "table.unshift", "path": "/shared/table/table.unshift.md", "type": "shared"},
            {"name": "table.reduce", "path": "/shared/table/table.reduce.md", "type": "shared"},
            {"name": "table.isArray", "path": "/shared/table/table.isArray.md", "type": "shared"},
            {"name": "table.matches", "path": "/shared/table/table.matches.md", "type": "shared"},
            {"name": "table.isFrozen", "path": "/shared/table/table.isFrozen.md", "type": "shared"},
            {"name": "table.freeze", "path": "/shared/table/table.freeze.md", "type": "shared"},
            {"name": "table.deepclone", "path": "/shared/table/table.deepclone.md", "type": "shared"},
            {"name": "table.contains", "path": "/shared/table/table.contains.md", "type": "shared"},
            {"name": "table.print", "path": "/shared/table/table.print.md", "type": "shared"}
        ],
        "json": [
            {"name": "json.parse", "path": "/shared/json/json.parse.md", "type": "shared"}
        ],
        "utils": [
            {"name": "call", "path": "/shared/utils/call.md", "type": "shared"}
        ],
        "math": [
            {"name": "math.round", "path": "/shared/math/math.round.md", "type": "shared"}
        ],
        "translation": [
            {"name": "translate", "path": "/shared/translation/translate.md", "type": "shared"}
        ]
    },
    "statebags": {
        "Players": [],
        "Entity": []
    },
    "event": {
        "server": [
            {"name": "one:character:createCharacter", "path": "/event/character/createCharacter", "type": "event"},
            {"name": "one:character:deleteCharacter", "path": "/event/character/deleteCharacter", "type": "event"}
        ],
        "client": []
    }
}

export default natives