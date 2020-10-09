Vue.component('login', {
    template: `
    <div class="row">
        <div class="col-md-6 col-md-offset-3 bg-info">
            <form>
                <h3>Sign In</h3>

                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

                <p class="forgot-password text-right mt-2 mb-4">
                </p>
            </form>
        </div>
    </div>
    `
});


const app = new Vue({
    el: '#app',
});