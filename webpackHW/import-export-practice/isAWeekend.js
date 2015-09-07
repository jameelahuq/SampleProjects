/**
 * Created by HUQ on 9/4/15.
 */
export default  {
  TODAY: () => {
    var today = new Date().getDay();
    return (today === 0 || today === 6);
  },

  TOMORROW: () => {
    var today = new Date().getDay();
    return (today === 6 || today === 5);
  },

  YESTERDAY: function() {
    var today = new Date().getDay();
    return (today === 1 || today === 0);
  }
}