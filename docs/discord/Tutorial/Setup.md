---
sidebar_position: 1
---

# Setup

One of the very first steps to getting a Discord bot up and running is creating the bot account itself. This page will cover the process on doing that.

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
**IMPORTANT**: toggle the "Message Content Intent." 
Without this intent enabled, your bot won't be able to see the content of messages that users send.
This is required for discord.py's command handlers to function.

:::note
Once your bot reaches 75 servers, it will need to be verified and Discord will have to approve
your use of the Message Content Intents.
:::

### Step 7
Go to the "OAuth2" tab on the left sidebar, press "URL Generator."

Select the `bot` scope (which indicates that your application is a bot user)

Select the `applications.commands` scope (which lets you create application commands, which we will cover later in the guide)

In the "Bot Permissions" section, select the "Administrator" permission.
If you'd like, you can also select the individual permissions you think your bot will need instead of the catch-all "Administrator" one.

Click the "Copy" button beside the "Generated URL" box. This will be the URL you use to invite your bot to a server.

### Step 8
Over on Discord, create a server as usual. This is where you'll be tesing your bot(s).

### Step 9
Paste the link you copied in Step 6 into any channel. Clicking on this link will open a popup
that lets your bot join your server.

### Conclusion
Congratulations! You should now have your very own bot in your test server.
However, it won't do much, but we'll get to fixing that in the next post.

In the meanwhile, familiarize yourself with the Discord Developer Portal and how it works.