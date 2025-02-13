# Description 

This addon adds a special lore system to indicate the origin of items from Minecraft and other addons. If an item belongs to Minecraft, the lore will display "Minecraft." If it comes from MyAddon, it will show "MyAddon." Additionally, it not only displays the source but also the creator of the item. For example:

**Minecraft → "Mojang"**

**MyAddon → "Dark"**

This system helps players track where items come from and who created them.

# Color List (16 Different Colors)

- **Black**
- **Dark Blue**
- **Dark Green**
- **Dark Aqua**
- **Dark Red**
- **Dark Gray**
- **Gold**
- **Gray**
- **Blue**
- **Green**
- **Aqua**
- **Red**
- **Yellow**
- **White**
- **Pink**
- **Purple**

# Style List (6 Different Styles)

- **Bold**
- **Italic**
- **Underline**
- **Strikethrough**
- **Obfuscated**
- **Reset**

# Tag Commands

This addon includes special tag commands for players and addon creators.


## **`Commands for Players`**

Players can customize the lore style and color of their items.

### Set Lore Color:
```js
/tag @a projectid(color(black))
```

### Set Lore Style:
```js
/tag @a projectid(style(bold))
```


## **`Commands for Addon Creators`**

Addon creators can assign a unique identifier to their items and add their name as the author.

### Set Addon Lore Author:
```js
/tag @a projectid(identifier(myaddon)author(dark))
```

This ensures that items display both the addon they belong to and their creator

# Technical Information

**Compatibility:** Works flawlessly on Minecraft 1.21 and lower versions.

**Experimental Features:** No experimental features need to be enabled.

**Addon Compatibility:** Fully compatible with other addons.
