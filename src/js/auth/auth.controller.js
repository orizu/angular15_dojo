/**
 * Created by orizu on 23/08/2016.
 */
class AuthCtrl {
  constructor(User, $state) {
    'ngInject'; // enusres $state is available

    this._User = User;
    this.title = $state.current.title;
    // Get auth type from state
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm () {
    this.isSubmitting = true;
    this._User.attemptAuth(this.authType, this.formData).then(
      // Callback for success
      (res) => {
        this.isSubmitting = false;
        console.log(this._User.current);
    },
    // Callback for failure
    (err) => {
      this.isSubmitting = false;
      this.errors = err.data.errors;
    });

  }
}

export default AuthCtrl;