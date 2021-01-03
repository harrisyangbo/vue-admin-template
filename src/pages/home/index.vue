<template>
  <div class="layout">
    <Layout class="layout-box">
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo">
            logo
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate" />
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad" />
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics" />
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper" />
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout class="layout-content">
        <Sider
          hide-trigger
          :style="{background: '#fff'}"
        >
          <portal-menu />
        </Sider>
        <Layout :style="{padding: '24px 24px'}">
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb> -->
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import portalMenu from '../../components/menu/index';
// import userCenter from '../../components/user_center/index';
export default {
  name: 'Home',
  components: {
    portalMenu
  },
  data() {
    return {
      message: 'Hello world!'
    };
  },
  methods: {
    handleCommand(command) {
      console.log(command)
    }
  }
};
</script>

<style lang="scss" scoped>
.layout{
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &-box {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: #ffffff;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-content {
  height: 100%;
  .ivu-layout-sider {
    height: 100%;
  }
  .ivu-layout {
    height: 100%;
  }
}
</style>
