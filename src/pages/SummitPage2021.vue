<template>
  <q-page class="bg-secondary" padding>
    <div class="row flex flex-center" style="height: 100vh">
      <div class="col-md-6 col-sm-12">
        <div class="q-pa-lg text-white">
          <h2>Pehia Summit 2021</h2>
          <p style="font-size: 26px">
            After the whooping success of summit 2020, Pehia relaunched the
            summit with extra brownies in the year 2021, which opened up doors
            of technology for yet many people. The aim of the event was to bring
            together people who are passionate about technology and provide a
            platform for them to connect and share their insights.Without doubt,
            it turned out to be yet another tale of new experiences, tech
            stories, and a bunch of memories to hold on to everyone who were
            part of the event, be it volunteers, speakers or participants.
          </p>
          <!-- <div class="row">
            <q-btn class="bg-primary text-white q-ma-md" label="register">
            </q-btn>
            <q-btn class="bg-primary text-white q-ma-md" label="View Schedule">
            </q-btn>
          </div> -->
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
            We witnessed the transition of many from nervous novice to confident
            success stories by getting their hands dirty with code, despite the
            event being held online. We take pride in the fact that with this
            initiative we are one step closer to our dream- creating an
            inclusive society by bridging together the stranded thoughts of
            disparities. We believe when we wrapped up the summit, celebrating
            the third year of Pehia, you were able to grab out the best of what
            you seek. There are miles to go before we reach what we seek.
            Together let’s go get it!
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
