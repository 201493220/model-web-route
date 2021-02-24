<template>
  <el-submenu
    :index="item.url"
    v-if="item.children && item.children.length > 0"
  >
    <template slot="title">
      <!-- <i :class="item.icon" v-if="item.icon"></i> -->
      {{ item.title }}
    </template>
    <menu-item
      :item="subitem"
      v-for="subitem in item.children"
      :key="subitem.id"
      :index="item.url"
      class="zi-menu"
    ></menu-item>
  </el-submenu>

  <el-menu-item :index="item.url" v-else>
    <template slot="title">
      <!-- <i :class="item.icon" v-if="item.icon"></i> -->
      {{ item.title }}
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: Object
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  beforeMount() {},
  watch: {}
}
</script>
<style scoped>
.zi-menu {
  background-color: #999 !important;
}
</style>
