<script setup>
import Img, { CloudImageProvider } from "vue-cloudimage-responsive";

const {
  public: { token },
} = useRuntimeConfig();

const cloudimageConfig = {
  token,
  baseURL: "/",
  customDomain: "cdn.lecollectionist.com",
  lowQualityPreview: {
    minImgWidth: 400,
  },
  params: {},
};
</script>

<template>
  <div class="bg-gray-500 p-4 h-full max-w-screen-lg m-auto">
    <h1 class="mb-4">Exemple</h1>
    <CloudImageProvider v-bind:cloudImageConfig="cloudimageConfig">
      <h1>Simple demo of vue-cloudimage-responsive</h1>
      <Img
        src="__lecollectionist__/production/houses/8829/photos/ra7j12OxQr6x5OHeHCGz_5650db80-a6fa-4318-fb4a-0426b9ed3b71.jpg"
        alt="Demo image"
        v-bind:ratio="2"
      />
    </CloudImageProvider>
  </div>
</template>
