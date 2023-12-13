<template>
    <header>
        <nav>
            <ul>
                <li><nuxt-link to="/"><img src="../img/logo_transparent.png" height="80"></nuxt-link></li>
                <li><nuxt-link to="/kindle">Kindle dashboard</nuxt-link></li>
                <li><nuxt-link to="/subscription">Subscription manager</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
/* 任意のスタイリングを追加 */
header {
    background-color: rgb(216, 216, 216);
    padding: 1rem;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

nav li {
    margin-right: 1rem;
}

nav a {
    color: black;
    text-decoration: none;
    vertical-align: middle;
}
</style>
