module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bfd608834ed1c390ce428867e5af78c9'),
  },
});
