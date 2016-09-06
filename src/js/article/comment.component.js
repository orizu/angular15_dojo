/**
 * Created by orizu on 01/09/2016.
 */
class CommentCtrl {

  constructor (User) {
    'ngInject';

    // User can delete comment if they are the author
    if (User.current) {
      this.canModify = (User.current.username === this.data.author.username);
    } else {
      this.canModify = false;
    }
  }

}


let Comment = {
  bindings: {
    data: '=',
    deleteCb: '&'
  },
  controller: CommentCtrl,
  templateUrl: 'article/comment.html'
};

export default Comment;/**
 * Created by orizu on 05/09/2016.
 */
