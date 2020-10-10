/* Le FOS JS Routing n'étant pas développé pour une utilisation avec webpack, ajouter les lignes d'appel au <script>
comme d'habitude (à appeler avant le "build/front.js" ;
Ajouter ce fichier aux assets gérés par webpack et l'appeler dans le app.js ( require('./routing/routing.js'); )
On a ensuite accès comme d'habitude au Routing.generate('ma_route') dans les js de webpack.
*/
module.exports = window.Routing;