import { $DOCUMENT, $BODY, NOTOUCH, detectTouch } from './_constants';
import svg4everybody from 'svg4everybody';


export default (function() {

  !detectTouch() && $BODY.addClass(NOTOUCH);
  svg4everybody();

})();
