module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'cronos',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
