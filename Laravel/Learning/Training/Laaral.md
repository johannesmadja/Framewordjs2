# Afficher une view en renvoyant un fichier depuis la route
- Lorsque l'extension du fichier est 'php', on écrira ceci dans routes => web.php : 
    
    ```php
    Route::get('/home', function () {
    #dd($user); // die and dump
    #ddd($user); // die, dump & debug
    return view("admin.home"); // fonction permettant de retourner une vue
    });
    ```
Le fichier 'home' devra se trouver dans resources => views. Si home.php se trouve dans un dossier 'admin', on écrira "admin.home"

La fonction `view()` prend un second argument qui est souvent un tableau associatif. Dont la clé est le nom de l'article et la valeur est la valeur de l'article 

    ```php
     return view("admin.home", ['articles' => $articles]);
    ```

# Les fonctions `dd() ` et `ddd()`
- dd() : die and dump
- ddd() : die, dump & debug


# Les routes avec les paramètres
```php
    Route::get('/article/{id}', function (int $id) {
    return "<p>Détail de l'article $id </p>";
    });
```
<a href = "{{url('article', $article['id'])}}">Voir détails</a>
La fonction "url()" s'utilise pour renseigner littéralement l'url ou le chemin


# Les routes nommées : 
Ce sont les routes auxquelles ont donne un nom
```php
Route::get('/particuliers/en/share/space/{id}', function (int $id) {
    return "Route particulier $id ";
})->name('detail');
```
<a href = "{{route('detail', $article['id'])}}">Voir détails</a>
La fonction "route()" s'utilise pour renseigner le nom d'une route nommée

## LES MIGRATIONS 
up() permet de créer une table 
down() permet de supprimer une table crée

* Les tables de la base de données se trouve dans config->database->migrations. Pour alors les envoyez dans la base de donnée spécifier dans le fichier .env, on fera : php artisan migrate

* Pour créer une table : php artisan make:migration create_articles_table. Ensuite faire à nouveau php artisan migrate


