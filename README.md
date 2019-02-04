# DiscordBot
Discord Bot created using Javascript and Node.js. <br>
This bot will search youtube for your given video and play the audio in your current channel<br>
(note that you will need to install node.js for this application to work)<br>
<h1>How To Add to server </h1>
<ol>
<li> Log into your discord account on the discord developer portal.</li>
<li> Create a new application.</li>
<li> Add a bot to your application.</li>
<li> Copy the Client/Application ID.</li>
<li> Go to https://discordapp.com/oauth2/authorize?client_id=<strong>CLIENT_ID_GOES_HERE</strong>&scope=bot&permissions=0</li>
<li> Select server and click authorize.<br>
(You yourself need to have permission to add bots to the server for it to show up on the list)</li>
<li> Navigate to your application's bot section and copy its token.<br>
(Keep this private unless you want your bot to be controlled by someone else)</li>
<li> Create a new text file and paste this along with your token instead. <br>
{
    "token": "your token in here, keep the quotation marks and brackets."
}
</li>
<li> Save the text file as "token.json" in the root folder for this application. </li>
<li> Create another text file and paste this into the file. <br>
node index.js <br>
pause <br></li>
<li> Then save the text file as "start.bat" in the root folder</li>
</ol>
And that should be it. To run the bot you just need discord open, then run start.bat and your bot should come online.<br>
<h1> Commands </h1>
<ul>
<li>.q song name/youtube title/youtube url</li>
<ul><li>Bot will search youtube for your song and add it to the queue</li></ul>
<li>.join</li>
<ul><li>Bot will join your current discord channel</li></ul>
<li>.play</li>
<ul><li>Plays song at the start of the queue</li></ul>
<li>.leave</li>
<ul><li>Bot will leave your channel</li></ul>
<li>.ls</li>
<ul><li>Lists current songs in queue</li></ul>
<li>.n</li>
<ul><li>Skips current song</li></ul>
<li>.bye</li>
<ul><li>Bot goes offline</li></ul>
