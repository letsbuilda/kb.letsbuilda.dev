---
sidebar_position: 1
---

# Setup

One of the very first steps to getting a Discord bot up and running is creating the bot account itself. This page will cover the process on doing that.

## Creating your bot

### Step 1
Navigate to the [Discord Developer Portal](https://discord.com/developers/applications)

### Step 2
Press the "New Application" button on the top right hand corner

### Step 3
Type in the name of your application in the popup box. Click the checkbox to agree to Discord's [Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service) and [Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy). Press "Create."

### Step 4
Click on the "Bot" tab on the left hand sidebar

### Step 5
Press the "Add Bot" button in the top right hand corner. Press "Yes, do it!" in the popup that opens.

### Step 6
Go to the "OAuth2" tab on the left sidebar, press "URL Generator."

Select the `bot` scope (which indicates that your application is a bot user)

Select the `applications.commands` scope (which lets you create application commands, which we will cover later in the guide)

In the "Bot Permissions" section, select the "Administrator" permission.
If you'd like, you can also select the individual permissions you think your bot will need instead of the catch-all "Administrator" one.

Click the "Copy" button beside the "Generated URL" box. This will be the URL you use to invite your bot to a server.

### Step 7
Over on Discord, create a server as usual. This is where you'll be tesing your bot(s).

### Step 8
Paste the link you copied in Step 6 into any channel. Clicking on this link will open a popup
that lets your bot join your server.

### Step 9
Go back to the Discord Developer Portal, click "Reset Token", and copy the token. You'll need it later.

## Setting up your code

To setup your code, it's just as simple as doing a quick
```sh
$ pip install discord.py
```

and you're done! It's that simple!

(you may want a venv but we'll cover that somewhere else)

### Conclusion
Congratulations! You should now have your very own bot in your test server.
However, it won't do much, but we'll get to fixing that in the next post.

In the meanwhile, familiarize yourself with the Discord Developer Portal and how it works.