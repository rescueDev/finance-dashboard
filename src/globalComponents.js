import Vue from "vue";

import Container from "@/components/Container.vue";

Vue.component("Container", () => import("@/components/Container.vue"));
