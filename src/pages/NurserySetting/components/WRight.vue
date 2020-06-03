<template>
  <div id="WRight" class="rightBox animated slideInRight" :class="{'slideOutRight':rightBoxColsed}">
    <div class="rightHeader">
      <span>{{NurserySetting.rightPopTitle}}</span>
      <span>
        <i class="el-icon-close" @click="_closed"></i>
      </span>
    </div>
    <div class="rightContent">
      <div class="rightContentMain">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "../../NurserySetting/components/Mixins";
export default {
  mixins: [mixin],
  mounted() {
    this.$nextTick(() => {
      this.initHeight();
    });
  },
  data() {
    return {
      rightBoxColsed: false
    };
  },
  methods: {
    initHeight() {
      $("#WRight .rightContentMain").css("height", window.innerHeight - 70);
      window.onresize = function() {
        $("#WRight .rightContentMain").css("height", window.innerHeight - 70);
      };
    },
    _closed() {
      this.rightBoxColsed = true;
      setTimeout(() => {
        this.SETOPTIONS({ showPrintPage: false });
      }, 1000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.rightBox {
  width: 620px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  box-shadow: -2px -2px 5px #888;

  .rightHeader {
    width: 100%;
    height: 50px;
    background-color: #03a9f4;
    color: #fff;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;

    span {
      margin: 0 2%;
    }

    i {
      font-weight: bolder;
      cursor: pointer;
    }
  }

  .rightContent {
    margin-top: 50px;
    padding: 10px;
    box-sizing: border-box;
    background: rgba(230, 230, 230, 1);
    overflow-y: auto;
    height: 100%;

    .rightContentMain {
      background: #fff;
    }
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
</style>
