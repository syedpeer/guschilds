<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  data: function () {
    return {
      'base': 'column'
    }
  }
}
</script>

<style>
.column {
  box-sizing: border-box;
  padding: 0 16px;
}

.column--1 { width: 12.5%; }
.column--2 { width: 25%; }
.column--3 { width: 37.5%; }
.column--4 { width: 50%; }
.column--5 { width: 62.5% }
.column--6 { width: 75%; }
.column--7 { width: 87.5%; }
.column--8 { width: 100%; }

@media only screen and (max-width: 679px) {
  .column--center--smo {
    margin: 0 auto;
  }
}

@media only screen and (min-width: 680px) {
  .column--1--md { width: 12.5%; }
  .column--2--md { width: 25%; }
  .column--3--md { width: 37.5%; }
  .column--4--md { width: 50%; }
  .column--5--md { width: 62.5%; }
  .column--6--md { width: 75%; }
  .column--7--md { width: 87.5%; }
}

@media only screen and (min-width: 960px) {
  .column--1--lg { width: 12.5%; }
  .column--1-5--lg { width: 18.75%; }
  .column--2--lg { width: 25%; }
  .column--3--lg { width: 37.5%; }
  .column--4--lg { width: 50%; }
  .column--5--lg { width: 62.5%; }
  .column--6--lg { width: 75%; }
  .column--7--lg { width: 87.5%; }
}
</style>
