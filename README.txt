knex commands:
- knex init -> inicializa la coneccion de knex con la base de datos
- knex migrate:make table_name 
- knex migrate:latest
- knex seed:make seed_name
- knex seed:run


knex.raw('select * from users where id in (' + myArray.map(_ => '?').join(',') + ')', [...myArray]);
