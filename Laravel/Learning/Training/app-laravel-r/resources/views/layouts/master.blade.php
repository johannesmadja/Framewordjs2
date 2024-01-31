<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>

        <!-- Styles -->
        <style>
            
        </style>
    </head>
    <body class="antialiased">
        <header class = "flex flex-row justify-between mx-8">
             <div> 
                <a href="/"> Laravel 101 </a>
            </div>

            <nav>
                <ul>
                    <li><a href="/contact"> Contactez-nous </a></li>
                </ul>
            </nav>
        </header>

        <main class = "container md">
            @yield('content')
        </main>
    </body>
</html>
