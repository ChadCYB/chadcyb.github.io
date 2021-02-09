<template>
  <div class="footer-wrapper">
    <!-- <span>
      <reco-icon icon="reco-up" />
      Powered by
      <a target="blank" href="https://vuepress.vuejs.org/">{{`vuepress`}}</a>
    </span> -->
    <span>
      <!-- <reco-icon icon="reco-api" /> -->
      <a href="/">{{$site.title}}'s blog © {{ new Date().getFullYear() }} </a>

<!--      <a>-->
<!--        <span v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</span>-->
<!--        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>-->
<!--      </a>-->
    </span>
    <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { version } from '../package.json'
export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = ctx.root

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })
    return { version, showAccessNumber }
  }
})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
