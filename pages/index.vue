<template>
    <v-app>
        <h1 id="title">Laplusdestiny web apps</h1>
        <v-container id="button-container">
            <v-row>
                <v-col>
                    <RouterLink to="/kindle"><v-btn variant="outlined" width="230">Kindle dashboard</v-btn></RouterLink>
                </v-col>
                <v-col>
                    <RouterLink to="/subscription"><v-btn variant="outlined" width="230">Subscription manager</v-btn>
                    </RouterLink>
                </v-col>
                <v-col>
                    <RouterLink to="/about"><v-btn variant="outlined" width="230">About</v-btn></RouterLink>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<style>
h1#title {
    text-align: center;
    padding-top: 1em;
}

.button-container {
    align-items: center;

}

v-btn.button {
    width: "230"
}

/* .page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0.5;
    filter: blur(1rem);
} */
</style>
