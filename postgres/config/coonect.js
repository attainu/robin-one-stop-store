import Sequelize from 'sequelize'

 const sequelize = new Sequelize('postgres', 'postgres', '1996', {
    host: 'localhost',
    dialect: 'postgres',
    /* dialect:  one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})
// const connect = async () => {
//     try {
//         await sequelize.authenticate();
//         await sequelize.sync();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
export default sequelize