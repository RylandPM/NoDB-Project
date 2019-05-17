# no db structure plan

## frontend-checklist

- Reset.css
- package.json
  - main
  - proxy
    - port :

## front-end folder structure

- src/
  - App.js
  - index.js
  - components/
    - Char Sheet/
      - CharSheet.js
      - CharSheet.css
      - Header/
        - Header.js
        - Header.css
      - Stat Block/
        - stats.js
        - stats.css
      - Conditions/
        - conditions.js
        - conditions.css
      - Attack/
        - Attack.js
        - Attack.css
      - Inventory/
        - Inventory.js
        - Inventory.css
    - Sidebar/
      - Sidebar.js
      - Sidebar.css

## dependencies

`axios`

## backend-checklist

port =

## back-end folder structure

- server/
  - Index.js
  - controller/
    - sheetController.js

## dependencies

`express`

## routes

get: '/api/char_sheets'
get: '/api/char_sheets/:id'
post: '/api/new_sheet'
put: '/api/char_sheets/:id'
delete: '/api/char_sheets/:id'

## objects outline

```js
charSheetObj
{
    id: num,
    isFamiliar: bool, // optional
    Name: str,
    Class: str,
    Race: str,
    Level: num,
    Exp: num,
    Str: num,
    Dex: num,
    Con: num,
    Int: num,
    Wis: num,
    Char: num,
    AC: num,
    HP: num,
    ProforGeneric: num,
    MvSpeed: num,
    StrSv: num,
    DexSv: num,
    ConSv: num,
    IntSv: num,
    WisSv: num,
    CharSv: num,
    Languages: str,
    ConditionsorEnchants: arr,
    ResistorWeakness: arr,
    Deity: str,
    Familiar: {charSheetObj.isFamiliar === true}, // optional
    Attacks: [ {wepObj} ],
    Inventory: [strs],
    Spells: [ {splObj} ],
    Wealth: {moneyObj}
}

wepObj {
    Name: str,
    toHit: str,
    Damage: str,
    Range: str,
    Notes: str
}

spellObj {
    Name: str,
    SpellLevel: num,
    CastTime: str,
    Range: str,
    Components: str,
    Duration: str,
    Description: str
}

moneyObj {
    Plat: num,
    Gold: num,
    Silver: num,
    Copper: num
}
```

### usefull tech
