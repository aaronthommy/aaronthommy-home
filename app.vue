<script setup>
import { onMounted } from "vue";
import { useLanguageStore } from "~/stores/languageStore";
import { useThemeStore } from "~/stores/themeStore";

useHead({
  title: "aaronthommy - guitarist, pianist & composer",
  meta: [
    {
      name: "description",
      content:
        "Clips, Covers, Kompositionen auf der Gitarre und dem Klavier.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/aaronthommy-home-icon.ico" }],
});

const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();

  // Theme-Einstellungen initialisieren
  themeStore.initTheme();
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
