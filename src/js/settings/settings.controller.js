/**
 * Created by orizu on 24/08/2016.
 */
//export default
class SettingsCtrl {
  constructor (User) {
    'ngInject';

    this.formData = {
      email: User.current.email,
      bio: User.current.bio,
      image: User.current.image,
      username: User.current.username
    };

    // Bind is used to demonstrate explicitly keeping logout() called on this controller
    // "bound" to the context of the User object
    this.logout = User.logout.bind(User);

    // We could have also created a logout method thus:
    // logout() { this._User.logout() }


  }
}

export default SettingsCtrl;
