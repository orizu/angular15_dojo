/**
 * Created by orizu on 01/09/2016.
 */
class CommentCtrl {

  constructor () {
    'ngInject';

  }

}

let Comment = {
  bindings: {
    data: '=',
  },
  controller: CommentCtrl,
  templateUrl: 'article/comment.html'
};

export default Comment;/**
 * Created by orizu on 05/09/2016.
 */
