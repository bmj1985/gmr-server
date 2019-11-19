
  <template>
  <section>
    <b-field grouped group-multiline>
      <div class="control">
        <b-switch v-model="showWeekNumber">Show week number</b-switch>
      </div>
      <div class="control">
        <b-switch v-model="formatAmPm">AM/PM</b-switch>
      </div>
      <div class="control">
        <b-switch v-model="enableSeconds">Enable seconds</b-switch>
      </div>
    </b-field>
  </section>
</template
>

<script>
export default {
  data() {
    return {
      showWeekNumber: false,
      formatAmPm: false,
      enableSeconds: false
    }
  },
  computed: {
    format() {
      return this.formatAmPm ? '12' : '24'
    }
  }
}
</script>
</template>

<script>
export default {}
</script>

<style>
</style>