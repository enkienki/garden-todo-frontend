<h1>Garden Todo</h1>
<br>
<a href="https://gardentodo.herokuapp.com/">Available here on Heroku</a> (loading time is long due to free plan on heroku...)

<h3 align="center">Techs used: React, Express, Node, MongoDb, Mongoose, <a href="tachyons.io">Tachyons</a></h3>

<h2>History:</h2>
<p>It's a personal side project i started while i was learning React in 2019. I used to be a part of shared garden, mostly with beginners, and they were all the time asking what they could do. So in orders to help, i used to be a "professional" garden few years ago, i've build this app which provide all year round ideas and knowledge about what to do in the garden regarding of the seasonal work.</p>

<h2>Scenario:</h2>
<p>
 <img src="src/demo.gif"/>
</p>
<p>Just type the name of your city, village in France and with the help of Mapbox Geocoding API and DarkSky API the app provide weatherForcast for today and the next 2 days. It also give you a general idea about the weather for the all coming week. Besides that, a list of "todos" is diplayed and each todo related to a specific crops is clickable and show a card wher you can read all the information about it. There is more than 40 crops described with informations about sowing, planting time and growing techniques</p>

<h3>Todos:</h3>
There is still a lot of things which can be done, like displaying past days amount of rain, weather alert, more detailled infos and drawings about crops and more!
 
<h3>Issues:</h3>
Probably due the free plan on Heroku and the fact that the app is put in "sleep" mode if not used for an hour (it append all the time of course) the first issue is that the autocompletion isn't working the first time you type. You have to write a second time so it start giving autocompletion.
Also the scrolling to the plant description is not working on the first click, but this is a problem of architecture and conditionnal rendering i definitely need to work on
