La racine ou l'entrée de tout projet Laravel est le dossier "public"

Dans le model MVC : 
- Le model établit une connexion à la base de donnée pour effectuer toutes les manipulation du CRUD
- Les données sont transmises au contrôleur qui applique la logique et renvoie à la vue, la vue à afficher
- La vue à pour rôle d'afficher la vue demander 

** Dans laravel, les vues sont dans le dossier `ressources/views`. Cependant pour afficher une vue, il faut l'associer à une route dans le fichier `web.php` dans `routes/web.php`

** Ayant donc besoin de la vue renvoyée par le controller, des méthodes seront définies à l'intérieur du contrôleur. Il se trouve dans le dossier `app/Http/Controllers`

Dans les contrôleurs, La communauté laravel utilise ces noms de méthodes pour le CRUD :
- `index` pour lister les resources.
- `show` pour lire une resource. 
- `create` pour créer une resource. 
- `store` pour enregistrer une resource. 
- `edit` pour éditer une resource.
- `update` pour mettre à jour une resource.
- `destroy` pour effacer une resource.

** Nous passerons ensuite au model où un modèle sera crée pour chaque champs


## LE FICHIER WEB.PHP (routes => web.php) ----------------------------------------------------
A l'intérieur de ce fichier, toutes les routes sont définies. Nous disposons de deux manière po ur définir une route. Toutefois la `Route::post()` ou `Route::get()` prends deux paramètres : 

- Le premier est le chemin (de la route), le second une fonction retournant la view ou un tableau contenant l'appel au contrôleur associé à sa méthode.

Syntaxe n°1 :

```php
Route::post('/articles/create', ['articles' => $articles]);

Route::get('/', function () {
    return view('welcome'); // La fonction view() prend deux paramètre : Le chemin menant à la view à afficher et un tableau associatif
});
```

Syntaxe n°2 :
```php
Route::post('/articles/create', [ArticlesController::class, 'store']);
```

## LA VUE PRICIPALE (VIEW) -----------------------------------------------------------------
Le contenue des vues est définie dans `app/ressources/views/`
## -----------------------------------------------------------------------------------------


## LES MIGRATIONS ---------------------------------------------------------------------------
Avant de pouvoir récupérer les données avec notre modèle, il nous faut d'abord crée la base de donnée. C'est là où intervient les migrations : `php artisan migrate`

- Il est possible de crée de nouvelles tables : `php artisan make:migration create_comments_table`

- L'ajout des champs se fera dans les fichiers générés, à l'intérieur de la fonction `up()`

** Ceci est pour avoir un champ nullable qui vient après body
```php
    $table->string('image')->nullable()->after('body');
```
Le `timestamps()` génère les champs `created_at` at `update_at`

## -------------------------------------------------------------------------------------------


## FACTORY -----------------------------------------------------------------------------------
`fakerphp.github.io`
Elles aident à créer des données factisses. Et à spécifer comment ces données seront insérés. 
Pour cela, on créera en premier des classes factory avec la commande : `php artisan make:factory` ArticleFactory

Toutefois nous aurons besoins de modèles associés à ces factory. Alors, on fera créera un model mais en même temps un factory avec la commande : `php artisan make:model Article -f`

```php
    public function definition() {
        'title' => fake()->sentence(),
        'body' => fake()->paragraph(), // Le nombre de phrase par paragragh
        'images' => fake()->image('public/images'), // Prends le chemin du doosier dans lequel les images seront sauvegarder
    }
```
## -------------------------------------------------------------------------------------------


## MODELS ------------------------------------------------------------------------------------
A l'intéreur de notre model, on créer la propriété "$fillable" qui spécifiera les champs à modifier 

```php
    protected $fillable = [
        'title',
        'body',
        'images'
    ]
```
Ensuite nous repartons à notre factory. Et lorsque tous les paramètres seront définies.Nous allons instancier les données
## -------------------------------------------------------------------------------------------


## SEEDERS -----------------------------------------------------------------------------------
```php
    Article::factory(10)->create();
```
Ensuite tapez la commande : `php artisan db:seed` 
Ceci lancera la génération de toutes les données factisses.
## -------------------------------------------------------------------------------------------


Route des dossiers modifiéés : `Http/Controllers/Auth`, `resources/views/auth`


```php
// index (get)
Route::get('/articles', function() {})

// create (get)
Route::get('/articles/create', function() {})

// store (post)
Route::get('', function() {})

// show (get)
Route::get('', function() {})

// edit (get)
Route::get('', function() {})

// update (put)
Route::get('', function() {})

// destroy (delete)
Route::get('', function() {})

```