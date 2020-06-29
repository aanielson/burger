-- Still in the db folder, create a seeds.sql file.
-- In this file, write insert queries to populate the burgers table with at least three entries.

INSERT INTO burgers (burger_name, devoured) VALUES ('BigMac', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('South of the Border Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baconator', FALSE);

SELECT * FROM burgers;
