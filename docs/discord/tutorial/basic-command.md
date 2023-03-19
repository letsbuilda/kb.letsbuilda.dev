# Basic commands

This tutorial will show you how to create a basic command using discord.py. This tutorial assumes you have gone through the setup.

## Starting up your bot

Here's a basic code to get your bot up and running.

```py
import asyncio
import discord

TOKEN = "yourtoken"
intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print("Bot started!")

async def start():
    async with client:
        await client.start(TOKEN)
        
asyncio.run(start())
```

Remember to replace `yourtoken` after `TOKEN` with your token you got after the setup!

A lot just happened there, so we'll just recap.

The two `import` statements imported the modules `asyncio` and `discord`, which we need.

`TOKEN = "yourtoken"` declares the variable `TOKEN` as your token, which you'll need to login your bot to Discord.
`intents = discord.Intents.default()` creates a `discord.Intents` object. This class is to tell the Discord API what permissions/intents your bot will need.
`client = discord.Client(intents=intents)` creates a `discord.Client` object and assigns it to `client`, which will represent your bot, and gives it the intents you just created earlier.

The
```py
@client.event
async def on_ready():
    print("Bot started!")
```
just starts your bot and prints `Bot started!` to your console when its finished initializing.

And finally
```py
async def start():
    async with client:
        await client.start(TOKEN)

asyncio.run(start())
```
creates an asynchronous `start` function that starts your bot with your predefined token, and executes your asynchronous function with `asyncio`, a library dedicated to asynchronous operations.

Go back to your Discord server and see that your bot is online!

## Creating your first command

Time to create your first command!

First, under your `on_ready` function, create a new asynchronous function and call it, lets say, `my_command`, and add a `pass` statement so you can code it later. Your code should look something like this.

```py
import asyncio
import discord

TOKEN = "yourtoken"
intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print("Bot started!")

async def my_command():
    pass

async def start():
    async with client:
        await client.start(TOKEN)
asyncio.run(start())
```

Next, we need to create a `CommandTree` and set it up our `start` method.

```py
import asyncio
from discord import app_commands
import discord

TOKEN = "yourtoken"
intents = discord.Intents.default()
client = discord.Client()
tree = app_commands.CommandTree(client)

@client.event
async def on_ready():
    print("Bot started!")

async def my_command():
    pass

async def start():
    await tree.sync()
    async with client:
        await client.start(TOKEN)

asyncio.run(start())
```

And while we're at it, lets make our command an actual command and create a parameter which is a `discord.Interaction`.

```py
@tree.command(name="command", description="My first command!")
async def my_command(interaction: discord.Interaction):
    pass
```

And finally, we'll make our bot reply.

```py
@tree.command(name="command", description="My first command!")
async def my_command(interaction: discord.Interaction):
    await interaction.response.send_message("This is my first command!")
```

We're not done yet though (one last step, I promise)
You'll need to make your command only sync to one guild/server (your testing server) or else you'll need to wait **an hour** for it to sync globally.

```py
@tree.command(name="command", description="My first command!", guilds=[MYGUILDID])
async def my_command(interaction: discord.Interaction):
    await interaction.response.send_message("This is my first command!")
```

and replace MYGUILDID with your guild ID.

Congrats! You're done! Go to your Discord server and type `/command` and your bot will reply!