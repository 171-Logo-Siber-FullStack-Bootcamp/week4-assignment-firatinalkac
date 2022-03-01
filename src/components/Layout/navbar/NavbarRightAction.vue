<template>
  <div class="d-flex gap-4 align-items-center border-end px-4">
    <Dropdown class="dropdown-notification" notificationCount="3+">
      <template #dropdown>
        <i class="notification-icon bi bi-bell-fill"></i>
      </template>
      <template #dropdown-menu>
        <div class="menu-title">ALERTS CENTER</div>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-primary">
              <i class="text-white bi bi-file-earmark-text-fill"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-success">
              <i class="text-white bi bi-cash-coin mt-1"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-warning py-2">
              <i class="text-white bi bi-exclamation-triangle-fill"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0">
          <a class="dropdown-item" href="#">
            <small class="text-secondary text-center w-100 py-2"
              >Show All Alerts</small
            >
          </a>
        </li>
      </template>
    </Dropdown>
    <Dropdown class="dropdown-notification" notificationCount="7">
      <template #dropdown>
        <i class="notification-icon bi bi-envelope-fill"></i>
      </template>
      <template #dropdown-menu>
        <div class="menu-title">ALERTS CENTER</div>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-primary">
              <i class="text-white bi bi-file-earmark-text-fill"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-success">
              <i class="text-white bi bi-cash-coin mt-1"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0 border-bottom">
          <a class="dropdown-item py-2" href="#">
            <span class="notification-item rounded-pill bg-warning py-2">
              <i class="text-white bi bi-exclamation-triangle-fill"></i>
            </span>
            <div class="d-flex flex-column">
              <small class="text-secondary">December 12, 2019 </small>
              <span>Content</span>
            </div>
          </a>
        </li>
        <li class="p-0">
          <a class="dropdown-item" href="#">
            <small class="text-secondary text-center w-100 py-2"
              >Show All Alerts</small
            >
          </a>
        </li>
      </template>
    </Dropdown>
    <!--    <Dropdown notificationCount="7">-->
    <!--      <template #dropdown>-->
    <!--        <i class="notification-icon bi bi-envelope-fill"></i>-->
    <!--      </template>-->
    <!--      <template #dropdown-menu> items </template>-->
    <!--    </Dropdown>-->
  </div>
  <div class="px-4">
    <Dropdown>
      <template #dropdown>
        <div class="d-flex gap-3 align-items-center">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >Douglas McGee</span
          >
          <img
            class="img-profile rounded-circle"
            src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
            width="30"
          />
        </div>
      </template>
      <template #dropdown-menu>
        <li>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon bi bi-person-fill"></i>
            <span>Profil</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon bi bi-gear"></i>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon bi-list-ul"></i>
            <span>Activity Log</span>
          </a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon bi-box-arrow-left"></i>
            <span>Logout</span>
          </a>
        </li>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/UI/Dropdown";
export default {
  name: "NavbarRightAction",
  components: {
    Dropdown,
  },
};
</script>

<style scoped lang="scss">
.notification-icon {
  color: #d1d3e2;
  font-size: 20px;
  &:hover {
    color: #9a9a9d;
  }
}
.dropdown-item {
  .dropdown-icon {
    color: #b7b7bd;
  }
}
::v-deep(.dropdown-notification) {
  & .dropdown-menu {
    padding: 0 !important;
    border-radius: 3px !important;
    left: -300px;
    width: 320px;
    & .menu-title {
      background: #4e73df;
      padding: 12px 24px;
      border-radius: 5px 5px 0 0;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
    }
    & .notification-item {
      height: 45px;
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
