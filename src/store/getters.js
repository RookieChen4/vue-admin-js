const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  permission_routes: state => state.permission.routes,
  dateTime: state => state.dateTime.dateTime,
  roles: state => state.user.roles
}
export default getters
