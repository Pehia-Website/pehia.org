<template>
  <q-page class="bg-secondary" padding>
    <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-6 col-sm-12">
        <div class="q-pa-lg text-white">
          <h2>Pehia Summit 2020</h2>
          <p style="font-size: 26px">
            Pehia Summit 2020 was a premier non-profit event, organised for
            women and other gender groups in kerala to give wings to their
            programming dreams.With this initiative, Pehia was able to light up
            the world of hundreds of targeted audience who wrote their first
            hello world programme, stepped in to the world of programming with
            much fascination and proper guidance from practitioners and experts
            in the field from all over India.We also celebrated the 2 year
            anniversary of our roller-coaster ride where speakers shared their
            valuable insights on technology, opportunities, hackathons, coding
            competitions, and communities.
          </p>
          <div class="row">
            <!-- <q-btn class="bg-primary text-white q-ma-md" label="register">
            </q-btn>
            <q-btn class="bg-primary text-white q-ma-md" label="View Schedule">
            </q-btn> -->
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
            We were able to weave new tales of tech values as we goaded newbies
            to build up something cool by giving them opportunity and resources
            and guess what, many of them successfully build their first apps and
            others even grabbed internship opportunities.On jan 26 2020, we gave
            a new direction to our two year worth of efforts and ups and downs
            throughout the way in the process of which all of us experienced
            something beyond words and we were able to pass on this light to
            many aspiring individuals who were all in for it.
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
    <!-- <div class="row" style="width: 100%">
      <h4 style="width: 100%" class="text-white text-center">Speakers</h4>
    </div>
    <div class="row flex flex-center">
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
    </div>
    <div class="row flex flex-center">
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
      <SpeakerCard></SpeakerCard>
    </div> -->

    <!-- <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-7 col-sm-12">
        <div class="q-ma-xl">
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
          <p style="font-size: 20px">January 17th 2022</p>
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
          </div>
        </div>
      </div>
    </div> -->
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
