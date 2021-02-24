<template>
  <div class="difang" :style="conheight">
    <iframe
      src="/opConfig/CoalType"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"
      style="width: 100%; height: 100%; outline: none"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "ResourceSide",
  data() {
    return {
      tableHeight: 0,
      conheight: {
        height: "",
      },
    };
  },
  mounted() {
    // window.location.href = "/opConfig/CoalType";
    this.getHeight();
    window.addEventListener("resize", this.getHeight);
  },
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight - 150 + "px";
    },
  },
};
</script>

<style lang="scss"></style>
