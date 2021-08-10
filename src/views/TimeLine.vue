<template>
  <div class="block">
    <el-timeline>
      <template v-for="(activity, index) in activities">
        <el-timeline-item
          :key="index"
          :timestamp="activity.timestamp"
          placement="top"
          class="left"
        >
          <el-card>
            <h4>{{ activity.content }}</h4>
            <img alt="Vue logo" :src="activity.img" />
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  // computed: mapState({
  //   activities: state => state.timeline.activities,
  // }),
  computed: {
    ...mapState('timeline', {
      activities: state => state.activities,
    }),
  },
}
</script>

<style>
.block {
  width: 500px;
  /* margin: 30px auto; */
}
.left {
  text-align: left;
}
</style>
