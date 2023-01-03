<template>
  <q-page>
    <div class="" style="height: 100vh">
      <q-img src="~assets/home_cover.png" fit="cover" style="height: 100%">
        <div class="absolute-full text-subtitle2 flex flex-center home_bg">
          <div class="row main-row">
            <div class="col-md-6 col-sm-12">
              <h2 class="q-mb-md gt-sm">
                <b>“The Unicorn is About to Take Off”</b>
              </h2>
              <h4 class="q-mb-md q-pt-xl lt-md">
                <b>“The Unicorn is About to Take Off”</b>
              </h4>
              <h6 class="q-my-sm" style="font-size: 26px">
                Come, dive into our world that’ll build you to embrace your
                tech-dreams and to sprout your wings.
              </h6>
              <q-btn color="primary" class="q-mr-md" @click="alert = true"
                ><b>Know more</b></q-btn
              >
              <q-btn color="primary" to="/Summit2023"><b>Summit 2023</b></q-btn>
              <social class="q-mt-md"></social>
            </div>

            <q-img
              src="~assets/pattern.png"
              fit="contain"
              class="lt-md"
              style="
                max-width: 700px;
                width: 100%;
                max-height: 429.8px;
                height: 100%;
              "
            ></q-img>
          </div>
        </div>
      </q-img>
      <q-img
        src="~assets/pattern.png"
        fit="contain"
        class="gt-sm"
        style="
          position: absolute;
          bottom: 0;
          right: 0;
          max-width: 700px;
          width: 100%;
          height: 429.8px;
        "
      ></q-img>

      <div
        class="row"
        style="position: absolute; bottom: 0; left: 0; width: 100%"
      >
        <!-- <div class="col-md-6 gt-sm">
          <q-tabs
            v-model="tab"
            inline-label
            :breakpoint="0"
            align="justify"
            class="bg-transparent text-white"
          >
            <q-tab name="contact" label="Contact" />
            <q-tab name="alarms" label="FAQs" />
            <q-tab v-if="$q.screen.gt.sm" name="movies" label="Campus" />
            <q-tab v-if="$q.screen.gt.sm" name="photos" label="Opportunities" />
            <q-btn-dropdown
              v-if="$q.screen.lt.md"
              auto-close
              stretch
              flat
              label="More..."
            >
              <q-list>
                <q-item clickable @click="tab = 'movies'">
                  <q-item-section>Movies</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>Photos</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-tabs>
        </div> -->
      </div>
    </div>

    <q-dialog v-model="alert">
      <q-card style="width: 100%; max-width: 1200px; border-radius: 20px">
        <q-card-section class="q-pt-none">
          <div class="row flex flex-center">
            <div class="col-md-6 col-sm-12 flex flex-center q-pa-lg">
              <q-img
                src="~assets/img2.png"
                fit="cover"
                class="shadow-6"
                style="height: 100%; border-radius: 20px"
              ></q-img>
            </div>
            <div class="col-md-6 col-sm-12 q-pa-lg">
              <h2 class="text-left q-mb-sm">What is Pehia?</h2>
              <p style="text-align: justify; text-justify: inter-word">
                PEHIA is a community based non-profit working towards the cause
                of bridging the gender gap in technology with a primary focus on
                computer science & programming. One of the largest women in tech
                communities in Kerala, India, Pehia Foundation conducts
                workshops, peer learning groups, online coding competition, and
                provides mentorship and guidance for its online community of
                over 200+ to attend hackathons together and ace opportunities
                like internships, jobs & scholarship. Established in 2017 by
                Enfa Rose George and Sreepriya Radhakrishnan, the organization
                has been featured in national newspapers & television and was
                also a nominee to Asianet Sthree Shakthi Awards in 2018.
              </p>
              <social class="q-mt-md"></social>
            </div>
          </div>
        </q-card-section>

        <!-- <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions> -->
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import social from "src/components/SocialIcons.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    social,
  },

  setup() {
    return {
      tab: ref("mails"),
      alert: ref(false),
    };
  },
});
</script>
<style scoped>
.home_bg {
  background-color: rgba(11, 14, 41, 0.72);
}

.main-row {
  max-width: 1200px;
  width: 100%;
}
</style>
