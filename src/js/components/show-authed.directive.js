/**
 * Created by orizu on 23/08/2016.
 */
// Directive rather than a component as
// Directives should operate on existing HTML elements via an attribute
// (i.e. <div hide-this-element="true">I'm going to be hidden programmatically</div>,
// Components are meant to be standalone HTML elements (i.e. <list-errors></list-errors>).

function ShowAuthed(User) {
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.User = User;

      scope.$watch('User.current', function (val) {
        // If user detected
        if (val) {
          if (attrs.showAuthed === 'true') {
            element.css({ display: 'inherit' })
          } else {
            element.css({ display: 'none' })
          }
          // No user detected
        } else {
          if (attrs.showAuthed === 'true') {
            element.css({ display: 'none'})
          } else {
            element.css({ display: 'inherit'})
          }
        }
      });
    }
  }
}

export default ShowAuthed;