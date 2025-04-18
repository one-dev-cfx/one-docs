### GetCharacterFromCharacterId
- This function get a character from characterid

```TS
function(charid: number): object
```

### Exemple
___
```LUA
local player = tblPlayers[source].characters
local charid
for i=1, #player do
    local row = player[i]
    if row.default then charid = row.charId break end
end
local character = GetCharacterFromCharacterId(charid)
table.print(character)
```
___