<template>
  <div>
    <v-card>
      <v-img
        id="Hero"
        dark
        :src="require('../assets/RTMGetInvolvedbkgrd.jpg')"
        class="white--text align-end text-lg-center text-md-left"
      >
        <div id="heroText">
          <v-h1 class="main font-weight-black mb-4 text--white text-center">
            Get Involved
          </v-h1>
          <h4 class="sub font-weight-light">
            Watch your faith grow through investing in relationships with people
            who want to learn and grow with you.
          </h4>
          <div class="d-flex justify-center">
            <v-card-actions>
              <v-btn x-large color="#D9E021" class="pa-4">Sign up</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-img>
    </v-card>
    <v-container>
      <v-row no-gutters>
        <v-col id="l-col" lg="6" class="">
          <v-row no-gutters>
            <v-col tile class="px-5">
              <v-row id="leftcol">
                <v-card flat>
                  <v-img
                    :src="require('@/assets/GetInvolved/church-2.png')"
                  ></v-img>
                  <h2>People Groups</h2>
                  <p>
                    The People’s Group of Revealing Truth Ministries (RTM)
                    serves each member at each stage of life. In addition to the
                    dynamic word brought forth in the main sanctuary, we offer a
                    mirroring experience for the children and youth that we have
                    the opportunity to serve.
                  </p>
                  <a href="/">LEARN MORE >></a>
                </v-card>
              </v-row>
              <v-row id="leftcol">
                <v-card flat>
                  <v-img
                    :src="require('@/assets/GetInvolved/church-1.png')"
                  ></v-img>
                  <h2>Creative Arts</h2>
                  <p>
                    The Creative Arts team sets an energetic and harmonious
                    atmosphere of praise & worship through performing and visual
                    artistic expression. We are the look, feel, sound and
                    heartbeat of the vision. LEARN MORE >>
                  </p>
                  <a href="/">LEARN MORE >></a>
                </v-card>
              </v-row>
              <v-row id="leftcol">
                <v-card flat>
                  <v-img
                    :src="require('@/assets/GetInvolved/church-4.png')"
                  ></v-img>
                  <h2>Support Groups</h2>
                  <p>
                    The Revealing Truth Ministries (RTM) Support Group is the
                    heartbeat of RTM. We are behind the scenes warriors
                    committed to serving and perfecting the vision of the
                    ministry. We are unified through our many strengths and
                    bound together in the common pursuit to uphold and preserve
                    the integrity of the ministry.
                  </p>
                  <a href="/">LEARN MORE >></a>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="l-col" lg="6" class="pa-2">
          <v-row no-gutters>
            <v-col class="px-5">
              <v-row id="leftcol">
                <v-card flat>
                  <v-img
                    :src="require('@/assets/GetInvolved/church-3.png')"
                  ></v-img>
                  <h2>Life Groups</h2>
                  <p>
                    Life Group is the lifeline of Revealing Truth Ministries
                    (RTM). We come in contact with everyone who attends a
                    service, from the moment they step through the front door
                    until the time they exit, to make sure that all guests and
                    members understand and receive all RTM has to offer.
                  </p>
                  <a href="/">LEARN MORE >></a>
                </v-card>
              </v-row>
              <v-row id="leftcol">
                <v-card flat>
                  <v-img
                    :src="require('@/assets/GetInvolved/church.png')"
                  ></v-img>
                  <h2>Outreach</h2>
                  <p>
                    The Outreach Group at Revealing Truth Ministries (RTM) is
                    the hands and feet of the ministry. We do just as the Word
                    of God says by embodying the scripture that says “We are the
                    church” (I Corinthians 6:19) and delivering the good news of
                    who God is to them where they are in the community (and
                    abroad).
                  </p>
                  <a href="/">LEARN MORE >></a>
                </v-card>
              </v-row>
              <v-row id="leftcol">
                <v-btn block x-large color="#D9E021" class="pa-4"
                  >JOIN A MINISTRY GROUP</v-btn
                >
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'fullWidth'
}
</script>

<style lang="sass">
#Hero
  height: 500px
  background-position: center

  @media (max-width: 600px)
    background-position: right 80% bottom 45%

#heroText
  margin-bottom: 1%
  padding: 5%

  .main
    font-size: 5em
    line-height: 80%

    @media (max-width: 1264px)
      font-size: 4.5em

    @media (max-width: 600px)
      font-size: 3em

  .sub
    font-size: 2em
    @media (max-width: 1264px)
      font-size: 1.5em

    @media (max-width: 600px)
      font-size: 1em

#leftcol
    margin-bottom: 30px

    h2
      margin-top: 20px
      margin-bottom: 10px
</style>
