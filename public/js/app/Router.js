Chat.Router.map(function() {
    this.resource('chat', { path:"/" });
    this.resource('register', {path: "/register" });
    this.resource('login', { path: "/login" })
});

Chat.ChatRoute = Ember.Route.extend({
    model: function() {
        return 'test';
    }
});/**
 * Created by Josh on 4/23/14.
 */
