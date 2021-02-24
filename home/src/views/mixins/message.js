export default {
    methods: {
      $warning(message) {
        this.$message({
          message,
          type: "warning",
        });
      },
      $success(message) {
        this.$message({
          message,
          type: "success",
        });
      },
    },
  }