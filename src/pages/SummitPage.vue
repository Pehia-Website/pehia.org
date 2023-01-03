<template>
  <q-page class="bg-secondary" padding>
    <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-6 col-sm-12">
        <div class="q-pa-lg text-white">
          <h2>Pehia Summit 2023</h2>
          <p style="font-size: 26px">
            It's time to meet again! Pehia is celebrating our 5th anniversary
            and what's more exciting than Pehia Summit 2023! We are hosting the
            latest version of pehia summit on January 26th 2023 at Kerala
            Startup Mission from 9:00 am.
          </p>
          <div class="row">
            <q-btn
              class="bg-primary text-white q-ma-md"
              href="https://docs.google.com/forms/d/e/1FAIpQLScEN3V4_5NMseuvPw6s1K4dK4rWwe9L3Kgt7v38BTWmkabSCA/viewform"
              target="_blank"
              label="Register now"
            >
            </q-btn>
            <q-btn
              outline
              disable
              class="q-ma-md"
              label=" Schedule (coming soon)"
            >
            </q-btn>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div>
          <q-img
            src="~assets/Oreti.png"
            fit="contain"
            style="
              max-width: 700px;
              width: 100%;
              max-height: 429.8px;
              height: 100%;
            "
          ></q-img>
        </div>
      </div>
    </div>

    <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-7 col-sm-12">
        <div class="q-ma-xl">
          <q-img
            src="~assets/summit2.png"
            fit="contain"
            style="
              max-width: 700px;
              width: 100%;
              max-height: 429.8px;
              height: 100%;
            "
          ></q-img>
        </div>
      </div>
      <div class="col-md-5 col-sm-12">
        <div class="q-pa-lg text-white">
          <!-- <h2>Pehia Summit 2022</h2> -->
          <p style="font-size: 26px">
            This year, we are proud to host multiple speakers who have stood up
            for themselves and celebrated their victories inspiring hundreds and
            thousands of people. Tune into meet the best people, hear new
            stories, attend awesome workshops, play games and much more. We are
            excited, are you?
          </p>
          <!-- <div class="row">
            <q-btn class="bg-primary text-white q-ma-md" label="register">
            </q-btn>
            <q-btn class="bg-primary text-white q-ma-md" label="View Schedule">
            </q-btn>
          </div> -->
        </div>
      </div>
    </div>
    <div class="row" style="width: 100%">
      <h4 style="width: 100%" class="text-white text-center">Speakers</h4>
    </div>
    <!-- <div class="row flex flex-center">
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
    </div>
    <div class="row flex flex-center">
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
    </div> -->

    <div class="row" style="width: 100%">
      <h6 style="width: 100%" class="text-white text-center">Coming soon...</h6>
    </div>

    <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-7 col-sm-12">
        <div class="q-ma-xl">
          <!-- <q-img
            src="~assets/summit2.png"
            fit="contain"
            style="
              max-width: 700px;
              width: 100%;
              max-height: 429.8px;
              height: 100%;
            "
          ></q-img> -->
          <iframe
            class="gt-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5332357287343!2d76.35204481465685!3d10.055321192813226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c04e3627551%3A0xeaddd199d9bbde2b!2sKerala%20Technology%20Innovation%20Zone%20(KTIZ)!5e0!3m2!1sen!2sin!4v1672255654580!5m2!1sen!2sin"
            style="
              border-radius: 30px;
              max-width: 700px;
              width: 100%;
              height: 429px;
            "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <iframe
            class="lt-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5332357287343!2d76.35204481465685!3d10.055321192813226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c04e3627551%3A0xeaddd199d9bbde2b!2sKerala%20Technology%20Innovation%20Zone%20(KTIZ)!5e0!3m2!1sen!2sin!4v1672255654580!5m2!1sen!2sin"
            style="
              border-radius: 30px;
              max-width: 700px;
              width: 100%;
              max-height: 429px;
              height: 100%;
            "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="col-md-5 col-sm-12">
        <div class="q-pa-lg text-white">
          <h3>See Y’all there</h3>
          <p style="font-size: 20px">January 26th 2023</p>
          <p style="font-size: 20px">
            Kerala Technology Innovation Zone (KTIZ) കേരള ടെക്നോളജി ഇന്നൊവേഷൻ
            സോൺ
          </p>
          <div class="row">
            <q-btn
              class="bg-primary text-white"
              icon="navigation"
              label="Navigate"
            >
            </q-btn>
            <!-- <q-btn class="bg-primary text-white q-ma-md" label="View Schedule">
            </q-btn> -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import SpeakerCard from "app/src/components/SpeakerCard.vue";
export default {
  components: {
    // SpeakerCard,
  },
  // name: 'PageName',
};
</script>
<style scoped>
.home_bg {
  background-color: rgba(11, 14, 41, 0.72);
}
</style>
