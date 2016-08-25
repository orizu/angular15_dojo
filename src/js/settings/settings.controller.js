/**
 * Created by orizu on 24/08/2016.
 */
//export default
class SettingsCtrl {
  constructor (User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

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

  // Settings update submit handler
  submitForm () {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      // Callback for success
      (user) => {
        this._$state.go('app.profile', { username: user.username });
      },
      // Callback for failure
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  }
}

export default SettingsCtrl;
