<template>
  <Menu
    class="portal-menus"
    :active-name="'/portal/pageOne'"
    mode="horizontal"
    @on-select="menuSelect"
  >
    <div
      v-for="(item, index) in menus"
      :key="index"
      class="menu-list-box"
    >
      <Submenu v-if="item.children && item.children.length > 0">
        <template slot="title">
          <i
            v-if="item.icon !== ''"
            :class="item.icon"
          />
          <span>{{ item.title }}</span>
        </template>
        <MenuGroup>
          <MenuItem
            :name="child.path"
            v-for="(child, ind) in item.children"
            :key="ind"
          >
            {{ child.title }}
          </MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem
        :name="item.path"
        :disabled="item.disabled"
      >
        <i
          v-if="item.icon !== ''"
          :class="item.icon"
        />
        {{ item.title }}
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
import menus from './menu_data';
export default {
  data() {
    return {
      menus: menus
    }
  },
  computed: {
    // userRole: function() {
    //   return window.sessionStorage.getItem('role');
    // }
  },
  methods: {
    menuSelect(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.portal-menus {
  height: 100%;
  .ivu-menu-item {
    margin-bottom: 8px;
  }
}
.menu-list-box {
  width: 100%;
  .ivu-menu-item {
    width: 100%;
    text-align: center;
  }
}
</style>