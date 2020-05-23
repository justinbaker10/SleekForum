
const createThreadTable = `
create table thread (
    id serial primary key,
    uuid text unique,
    "name" text unique,
    ctime timestamptz,
    mtime timestamptz default current_timestamp
);`



exports.up = function(knex) {
  return knex.raw(createThreadTable)
};

exports.down = function(knex) {

};