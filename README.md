<h1>COMMANDE KEBAB</h1>

<br>
<a href="http://commande-kebab.herokuapp.com/">Demo available here on Heroku</a>

<h3>Techs used: MERN stack, socket.io, axios, bootstrap 4</h3>

<h2>History:</h2>
<p>This project was created for restaurants. I'm actually work in a turkish restaurant called La Mer Egée in NANCY (France), in summertimes it is really difficult to communicate orders correctly to the kitchen due to the amount of clients (the restaurant is pretty famous!). Usually we write orders on littles pieces of paper, and it's fine, but with high activity, we have difficulties to keep them clean and in order. This creates frustation, long time waiting for some clients and in the end, we don't have as good times as we have the rest of the year.</p>

<h2>Scenario:</h2>
<p>The waiter takes the order from the clients using the "new-order" page.</p>
<br>
<p align="center">
  <img src="public/gif/new_order.gif"/>
</p>
<br>
<p> After validating the order is sent to the database and, using socket.io, back to the "order-list" page, where the cooks can see them. The cooks have the possibility to validate each dish from the order separately and when the order is completely finished, they can validate it and send it to the database again.</p>
<br>
<p align="center">
  <img src="public/gif/commande_en_cours.gif"/>
</p>
<br>
<p>Finally the order appears in the "finished-orders" page at the choosen date. You can change date and review old orders. Orders are all stored in the database for now.</p>

<p>In the end, we also have the possibility to edit the menu on the "menu-modification" page if a product is not available.</p>


<h3>Todos:</h3>
<ul>
  <li>Add authentification</li>
  <li>Refactor code</li>
  <li>Write more comments</li>
  <li>...</li>
 </ul>
 
