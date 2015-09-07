/**
 * Created by HUQ on 9/4/15.
 */

export default {
  splitSum : (string, splitter) => string.split(splitter).reduce((acc, n) => parseInt(acc) + parseInt(n))
}


