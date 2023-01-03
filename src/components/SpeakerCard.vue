<template>
  <q-card class="card_bg q-ma-md">
    <div class="row flex flex-center q-ma-xl">
      <q-img
        src="~assets/summit2.png"
        fit="cover"
        style="
          /* max-width: 200px; */
          width: 150px;
          /* max-height: 200px; */
          height: 150px;
          border-radius: 150px;
        "
      ></q-img>
    </div>
    <div class="row text-white">
      <div class="col-12 text-center">
        <h5 class="q-ma-none">Name Mid Last</h5>
        <h6 class="q-ma-none">afskjsdf</h6>
      </div>
    </div>
    <div class="row q-py-md text-white q-mb-lg" style="width: 100%">
      <div style="margin: auto">
        <q-icon class="q-pr-md iconstyle" name="ion-logo-facebook"></q-icon>
        <q-icon class="q-pr-md iconstyle" name="ion-logo-instagram"></q-icon>
        <q-icon class="q-pr-md iconstyle" name="ion-logo-linkedin"></q-icon>
        <q-icon class="q-pr-md iconstyle" name="ion-logo-twitter"></q-icon>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style scoped>
.card_bg {
  background: linear-gradient(#40136a, rgb(0, 0, 0, 0));
  min-width: 300px;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
}

.iconstyle {
  /* color: white; */
  font-size: 30px;
}
:hover {
  /* color: rgb(0, 255, 81); */
  font-size: 32px;
}
</style>
