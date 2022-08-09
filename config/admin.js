module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98e795c800f0f4769829887366b5c8d2'),
  },
});
