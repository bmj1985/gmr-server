<template>
  <div class="description-container">
    <div class="photo-container">
      <img id="pic" alt="Golden Mountain runners action photo" src="../assets/northtable.png">
    </div>
    <div class="text-container">
      <div class="major-details">
        <h3>Welcome to</h3>
        <img class="logo" alt="GMR logo" src="../assets/gmr_logo.png">
        <p class="next-run">Our next run will be:</p>
        <h2 class="date">
          {{date}}
          <!-- {{runTime}} -->
        </h2>
        <!-- <p class="location">
          Where:
          <a :href="googleMapLink" target="_blank">{{location}}</a>
        </p>-->
      </div>
      <div class="run-description">
        <p>
          See the
          <a
            href="https://www.facebook.com/groups/goldenmountainrunners"
            target="_blank"
          >Facebook</a> group page for details. Full website coming soon!
          <!-- <h2 class="title">{{title}}</h2>
        <div v-if="!details" :class="{pending: pendingRunDetails }">{{pendingRunDetails}}</div>
        <div v-else class="run-details">
          <p v-for="detail in details">{{detail}}</p>
        </div>
        <p class="route">
          Route description:
          <a :href="link" target="_blank">{{link}}</a>
          </p>-->
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { isTuesday, eachDay, addDays, format } from "date-fns";

export default Vue.extend({
  name: "RunDescription",
  data() {
    return {
      pendingRunDetails:
        "Stay tuned! Details on next Tuesday's run will generally be posted sometime between Thursday and Monday prior.",
      link: "https://www.gmap-pedometer.com/?r=7360374",
      runTime: "6:30pm",
      title: "White Ranch Take 2 (Rawhide Loop Edition)",
      location: "25303 Belcher Hill Rd, Golden, CO 80403",
      details: [
        "****Note Start Time 6:30*****",
        "Apparently all of the mountain bikes in the State of Colorado wanted to meet in the lower parking lot of White Ranch this past Tuesday.  I very much appreciate everyone’s flexibility in making the last minute shift to North Table to avoid an overcrowding situation at WR.  This week, we will try White Ranch.  This time we will head to the west lot to try to avoid some of the crowds.  We will call this one the Rawhide Loop since the entire run will be on Rawhide trail.  Pretty creative right?!?!",
        "We will start the run at 6:30 to allow for a little extra drive time to get the west lot.  For those who want to make sure we leave parking for other users (or just want to be environmentally friendly) we could definitely do some carpooling from Golden.  Respond in the comments if you want to meet at Mountain Toad at 6:00 and carpool up to the west lot.",
        "The total loop is about 5.2 miles.  It will definitely be a little more mellow than the lower section of the park, but still has good rolling climbs and great views.  After the run we will head back to town and grab some beers at the Toad.  See you all on Tuesday!"
      ],
      googleMapLink: "https://goo.gl/maps/fqmqohpp3LH2"
    };
  },
  computed: {
    date: function() {
      const oneWeekFromToday = addDays(new Date(), 7);
      const daysArr = eachDay(new Date(), oneWeekFromToday);
      const tuesday = daysArr.find(v => isTuesday(v));
      return tuesday ? format(tuesday, "dddd MMMM Do, YYYY") : null;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  a {
    text-decoration: none;
    color: #365899;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
  .photo-container {
    flex: 1;
    height: 98%;
    img {
      height: 100%;
      border-radius: 10px;
    }
    @media only screen and (max-width: 450px) {
      display: none;
    }
    @media only screen and (max-width: 600px) {
      img {
        max-width: calc(570px - 2rem);
        max-height: calc(570px - 2rem);
      }
    }
    @media only screen and (max-width: 760px) {
      img {
        max-width: calc(730px - 2rem);
        max-height: calc(730px - 2rem);
      }
    }
  }
  .text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin: 2rem;
    overflow: scroll;
    @media only screen and (max-width: 450px) {
      margin: 0;
      justify-content: flex-start;
      align-items: space-evenly;
      line-height: 1.2;
      text-align: center;
    }
    .major-details {
      height: 55%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 2rem;
        @media only screen and (max-width: 450px) {
          font-size: 1rem;
        }
      }
      h3 {
        font-size: 1.75rem;
      }
      .logo {
        height: 10rem;
        width: 10rem;
        @media only screen and (max-width: 450px) {
          height: 7rem;
          width: 7rem;
        }
      }
      .next-run {
      }
      .date {
      }
      .location {
      }
    }
    .run-description {
      margin-top: 1rem;
      height: 45%;
      line-height: 1.1;
      h2 {
        font-size: 1.25rem;
        text-align: center;
        font-weight: 800;
      }
      p {
        margin-top: 0.75rem;
      }
      &.pending {
        text-align: center;
      }
      text-align: justify;
      font-size: 1.25rem;
      box-shadow: 0;
    }
    .route {
      font-size: 1.25rem;
    }
    @media only screen and (max-width: 450px) {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      .logo {
        height: 7rem;
        width: 7rem;
      }
      .run-description {
        &.pending {
          text-align: center;
        }
        text-align: justify;
        font-size: 1.1rem;
        box-shadow: 0;
      }
      .route {
        font-size: 1rem;
      }
    }
  }
}
</style>

