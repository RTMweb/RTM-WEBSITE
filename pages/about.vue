<template>
  <div>
    <v-card>
      <v-img
        id="Hero"
        dark
        :src="require('../assets/RTMAboutbkgrd.png')"
        class="white--text align-end text-lg-center text-md-left"
      >
        <div id="heroText">
          <v-h1 class="main font-weight-black mb-4 text--white text-center">
            We Believe In Simple Truth:
          </v-h1>
          <h4 class="sub font-weight-light">
            We believe that truth makes a mark in people’s lives that can never
            be erased.
          </h4>
          <div class="d-flex justify-center">
            <v-card-actions>
              <v-btn x-large color="#D9E021" class="pa-4">OUR LEADERSHIP</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn outlined x-large color="white" class="pa-4"
                >PLAN YOUR VISIT</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-img>
    </v-card>
    <v-sheet elevation="6" color="#EFEFEF" class="py-10">
      <v-layout>
        <v-container>
          <v-row color="#EFEFEF">
            <v-col>
              <h2>Our Beliefs</h2>
              <p>
                Revealing Truth Ministries believes that truth, which is the
                Word of God, causes people to experience God’s abundance in
                every area of their lives. We believe truth transforms people
                into who God destined them to be.
              </p>
              <a href="/">LEARN MORE</a>
            </v-col>
            <v-col>
              <h2>Our Values</h2>
              <p>
                Revealing Truth Ministries believes that truth, which is the
                Word of God, causes people to experience God’s abundance in
                every area of their lives. We believe truth transforms people
                into who God destined them to be.
              </p>
              <a href="/">LEARN MORE</a>
            </v-col>
            <v-col>
              <h2>Leadership</h2>
              <p>
                Revealing Truth Ministries believes that truth, which is the
                Word of God, causes people to experience God’s abundance in
                every area of their lives. We believe truth transforms people
                into who God destined them to be.
              </p>
              <a href="/">LEARN MORE</a>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-sheet>
    <v-container>
      <v-row no-gutters>
        <v-col id="l-col" lg="8" class="pa-2">
          <v-row no-gutters>
            <v-col class="pr-10">
              <v-row id="leftcol">
                <h2>Local Vision</h2>
                <p>
                  Our local churches are destinations where people experience
                  and learn to access an overflow of peace, prosperity,
                  security, stability health, healing and truth through Christ.
                  God has led us to plant churches in several cities. In this
                  season, God is calling us to expand and plant once again in
                  Lakeland, Florida, and Riverview, Florida.
                </p>
              </v-row>
              <v-row id="leftcol">
                <h2>Community Outreach</h2>
                <p>
                  God has made a promise to us that we will build leaders and
                  impact nations around the world on the value of long term
                  relationships. God has spoken to us that Greg Powe Ministries,
                  which our founding Pastor formed over 20 years ago, is to
                  become Living Legacy in honor of his commitment to building
                  strong leaders who would create and inspire change from
                  generation to generation.
                </p>
              </v-row>
              <v-row id="leftcol">
                <h2>Body of Christ Vision</h2>
                <p>
                  God has spoken great things to us that require great
                  provision. We believe God will provide and exceed our $1
                  million goal to achieve these accomplishments. We are
                  believing God to bring increase and overflow into the life of
                  every person seeking to sow and partner with us in this great
                  work that will touch and heal many lives and bring glory to
                  God’s kingdom.
                </p>
              </v-row>
              <v-row id="leftcol">
                <h2>Embracing Legacy (Our Youth)</h2>
                <p>
                  Innovation and Arts Center The goal of Embracing Legacy (EL)
                  is to positively impact 1,000 Tampa Bay area youth weekly
                  through the arts and academics in order to leave a legacy of
                  character, hope and prosperity for generations to come.
                </p>
              </v-row>
              <v-row id="leftcol">
                <v-img :src="require('@/assets/TruthConnections.png')"></v-img>
                <h2>Truth Connections</h2>
                <p>
                  Watch your faith grow through investing in relationships with
                  people who want to learn and grow with you.
                </p>
                <a href="/">LEARN MORE >></a>
              </v-row>
              <v-row id="leftcol">
                <v-img :src="require('@/assets/church.png')"></v-img>
                <h2>Join Us For Church</h2>
                <p>
                  Watch your faith grow through investing in relationships with
                  people who want to learn and grow with you.
                </p>
                <a href="/">LEARN MORE >></a>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="r-col" class="pa-2">
          <SideMenu />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
export default {
  components: {
    SideMenu
  },
  layout: 'fullWidth'
}
</script>

<style lang="sass">
#Hero
  height: 70vh
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
