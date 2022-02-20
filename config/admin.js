module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8717802da6de093577ee9d06beb47042'),
  },
});
